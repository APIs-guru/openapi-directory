package operations

import (
	"openapi/pkg/models/shared"
)

type ChangePinQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type ChangePinSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type ChangePinRequest struct {
	QueryParams ChangePinQueryParams
	Request     shared.ChangePinRequest `request:"mediaType=application/json"`
	Security    ChangePinSecurity
}

type ChangePinResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
