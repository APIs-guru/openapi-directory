package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveOAuthApprovalPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
}

type RemoveOAuthApprovalHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RemoveOAuthApprovalRequest struct {
	PathParams RemoveOAuthApprovalPathParams
	Headers    RemoveOAuthApprovalHeaders
}

type RemoveOAuthApprovalResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
