package operations

import (
	"openapi/pkg/models/shared"
)

type GetMessagesSendQueryParams struct {
	Body            string `queryParam:"style=form,explode=true,name=body"`
	DeduplicationID *int64 `queryParam:"style=form,explode=true,name=deduplication-id"`
	To              string `queryParam:"style=form,explode=true,name=to"`
}

type GetMessagesSendSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetMessagesSendRequest struct {
	QueryParams GetMessagesSendQueryParams
	Security    GetMessagesSendSecurity
}

type GetMessagesSendResponse struct {
	ContentType string
	Error       *shared.Error
	Messages    []shared.Message
	StatusCode  int64
}
