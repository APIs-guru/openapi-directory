package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type UpdateAccountSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type UpdateAccountRequest struct {
	QueryParams UpdateAccountQueryParams
	Request     shared.AccountUpdateRequest `request:"mediaType=application/json"`
	Security    UpdateAccountSecurity
}

type UpdateAccountResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
