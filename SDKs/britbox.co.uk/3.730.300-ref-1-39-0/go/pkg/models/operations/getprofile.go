package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type GetProfileSecurity struct {
	ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
}

type GetProfileRequest struct {
	QueryParams GetProfileQueryParams
	Security    GetProfileSecurity
}

type GetProfileResponse struct {
	ContentType   string
	ProfileDetail *shared.ProfileDetail
	ServiceError  *shared.ServiceError
	StatusCode    int64
}
