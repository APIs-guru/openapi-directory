package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProfileWithIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateProfileWithIDQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type UpdateProfileWithIDSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type UpdateProfileWithIDRequest struct {
	PathParams  UpdateProfileWithIDPathParams
	QueryParams UpdateProfileWithIDQueryParams
	Request     shared.ProfileUpdateRequest `request:"mediaType=application/json"`
	Security    UpdateProfileWithIDSecurity
}

type UpdateProfileWithIDResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
