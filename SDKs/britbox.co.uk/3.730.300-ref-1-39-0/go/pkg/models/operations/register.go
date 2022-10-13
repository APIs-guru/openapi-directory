package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type RegisterRequest struct {
	QueryParams RegisterQueryParams
	Request     shared.RegistrationRequest `request:"mediaType=application/json"`
}

type RegisterResponse struct {
	AccessTokens []shared.AccessToken
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
