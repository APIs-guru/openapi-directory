package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAbusesAbuseIDMessagesAbuseMessageIDPathParams struct {
	AbuseID        int64 `pathParam:"style=simple,explode=false,name=abuseId"`
	AbuseMessageID int64 `pathParam:"style=simple,explode=false,name=abuseMessageId"`
}

type DeleteAbusesAbuseIDMessagesAbuseMessageIDSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteAbusesAbuseIDMessagesAbuseMessageIDRequest struct {
	PathParams DeleteAbusesAbuseIDMessagesAbuseMessageIDPathParams
	Security   DeleteAbusesAbuseIDMessagesAbuseMessageIDSecurity
}

type DeleteAbusesAbuseIDMessagesAbuseMessageIDResponse struct {
	ContentType string
	StatusCode  int64
}
