package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountTokenQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type GetAccountTokenRequest struct {
	QueryParams GetAccountTokenQueryParams
	Request     shared.AccountTokenRequest `request:"mediaType=application/json"`
}

type GetAccountTokenResponse struct {
	AccessTokens []shared.AccessToken
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
