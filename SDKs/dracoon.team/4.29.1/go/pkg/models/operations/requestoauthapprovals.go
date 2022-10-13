package operations

import (
	"openapi/pkg/models/shared"
)

type RequestOAuthApprovalsQueryParams struct {
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestOAuthApprovalsHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestOAuthApprovalsRequest struct {
	QueryParams RequestOAuthApprovalsQueryParams
	Headers     RequestOAuthApprovalsHeaders
}

type RequestOAuthApprovalsResponse struct {
	ContentType    string
	ErrorResponse  *shared.ErrorResponse
	OAuthApprovals []shared.OAuthApproval
	StatusCode     int64
}
