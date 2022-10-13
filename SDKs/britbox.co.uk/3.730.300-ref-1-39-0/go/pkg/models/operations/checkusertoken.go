package operations

import (
	"openapi/pkg/models/shared"
)

type CheckUserTokenQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	ID   string                    `queryParam:"style=form,explode=true,name=id"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type CheckUserTokenRequest struct {
	QueryParams CheckUserTokenQueryParams
}

type CheckUserTokenResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
