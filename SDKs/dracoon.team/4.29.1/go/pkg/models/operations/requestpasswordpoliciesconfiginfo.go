package operations

import (
	"openapi/pkg/models/shared"
)

type RequestPasswordPoliciesConfigInfoHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestPasswordPoliciesConfigInfoRequest struct {
	Headers RequestPasswordPoliciesConfigInfoHeaders
}

type RequestPasswordPoliciesConfigInfoResponse struct {
	ContentType            string
	ErrorResponse          *shared.ErrorResponse
	PasswordPoliciesConfig *shared.PasswordPoliciesConfig
	StatusCode             int64
}
