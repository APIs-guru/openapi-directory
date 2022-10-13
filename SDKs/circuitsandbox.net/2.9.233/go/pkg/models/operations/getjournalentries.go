package operations

import (
	"openapi/pkg/models/shared"
)

type GetJournalEntriesPathParams struct {
	TelephonyConversationID string `pathParam:"style=simple,explode=false,name=telephonyConversationId"`
}

type GetJournalEntriesDirectionEnum string

const (
	GetJournalEntriesDirectionEnumAfter  GetJournalEntriesDirectionEnum = "AFTER"
	GetJournalEntriesDirectionEnumBefore GetJournalEntriesDirectionEnum = "BEFORE"
	GetJournalEntriesDirectionEnumBoth   GetJournalEntriesDirectionEnum = "BOTH"
)

type GetJournalEntriesJournalFilterEnum string

const (
	GetJournalEntriesJournalFilterEnumAll               GetJournalEntriesJournalFilterEnum = "ALL"
	GetJournalEntriesJournalFilterEnumMissed            GetJournalEntriesJournalFilterEnum = "MISSED"
	GetJournalEntriesJournalFilterEnumDialed            GetJournalEntriesJournalFilterEnum = "DIALED"
	GetJournalEntriesJournalFilterEnumReceived          GetJournalEntriesJournalFilterEnum = "RECEIVED"
	GetJournalEntriesJournalFilterEnumDiverted          GetJournalEntriesJournalFilterEnum = "DIVERTED"
	GetJournalEntriesJournalFilterEnumVoicemails        GetJournalEntriesJournalFilterEnum = "VOICEMAILS"
	GetJournalEntriesJournalFilterEnumUnheradVoicemails GetJournalEntriesJournalFilterEnum = "UNHERAD_VOICEMAILS"
)

type GetJournalEntriesQueryParams struct {
	Direction       *GetJournalEntriesDirectionEnum     `queryParam:"style=form,explode=true,name=direction"`
	JournalFilter   *GetJournalEntriesJournalFilterEnum `queryParam:"style=form,explode=true,name=journalFilter"`
	NumberOfEntries *float64                            `queryParam:"style=form,explode=true,name=numberOfEntries"`
	Timestamp       *float64                            `queryParam:"style=form,explode=true,name=timestamp"`
}

type GetJournalEntriesSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetJournalEntriesRequest struct {
	PathParams  GetJournalEntriesPathParams
	QueryParams GetJournalEntriesQueryParams
	Security    GetJournalEntriesSecurity
}

type GetJournalEntriesResponse struct {
	Body              []byte
	ContentType       string
	ConversationItems []interface{}
	StatusCode        int64
}
