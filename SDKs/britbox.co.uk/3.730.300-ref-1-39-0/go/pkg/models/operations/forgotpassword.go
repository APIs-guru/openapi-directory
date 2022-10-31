package operations

import (
	"openapi/pkg/models/shared"
)

type ForgotPasswordQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type ForgotPasswordRequest struct {
	QueryParams ForgotPasswordQueryParams
	Request     shared.PasswordResetEmailRequest `request:"mediaType=application/json"`
}

type ForgotPasswordResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
