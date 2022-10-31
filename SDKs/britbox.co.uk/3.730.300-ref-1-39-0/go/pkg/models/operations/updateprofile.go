package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProfileQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type UpdateProfileSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type UpdateProfileRequest struct {
	QueryParams UpdateProfileQueryParams
	Request     shared.ItvUpdateProfileRequest `request:"mediaType=application/json"`
	Security    UpdateProfileSecurity
}

type UpdateProfileResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
