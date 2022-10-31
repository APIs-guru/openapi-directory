package operations

import (
	"openapi/pkg/models/shared"
)

type ChangePasswordPoliciesConfigHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type ChangePasswordPoliciesConfigRequest struct {
	Headers ChangePasswordPoliciesConfigHeaders
	Request shared.UpdatePasswordPoliciesConfig `request:"mediaType=application/json"`
}

type ChangePasswordPoliciesConfigResponse struct {
	ContentType            string
	ErrorResponse          *shared.ErrorResponse
	PasswordPoliciesConfig *shared.PasswordPoliciesConfig
	StatusCode             int64
}
