package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeEmailQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type ChangeEmailSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type ChangeEmailRequest struct {
	QueryParams ChangeEmailQueryParams
	Request     shared.ItvChangeEmailRequest `request:"mediaType=application/json"`
	Security    ChangeEmailSecurity
}

type ChangeEmailResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
