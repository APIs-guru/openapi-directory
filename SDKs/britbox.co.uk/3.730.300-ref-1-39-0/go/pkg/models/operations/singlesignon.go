package operations

import (
	"openapi/pkg/models/shared"
)

type SingleSignOnQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type SingleSignOnRequest struct {
	QueryParams SingleSignOnQueryParams
	Request     shared.SingleSignOnRequest `request:"mediaType=application/json"`
}

type SingleSignOnResponse struct {
	AccessTokens []shared.AccessToken
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
