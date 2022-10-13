package operations

import (
	"openapi/pkg/models/shared"
)

type ChangePasswordQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type ChangePasswordSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type ChangePasswordRequest struct {
	QueryParams ChangePasswordQueryParams
	Request     shared.ChangePasswordRequest `request:"mediaType=application/json"`
	Security    ChangePasswordSecurity
}

type ChangePasswordResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
