package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccountQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type DeleteAccountSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type DeleteAccountRequest struct {
	QueryParams DeleteAccountQueryParams
	Request     shared.ItvDeleteAccountRequest `request:"mediaType=application/json"`
	Security    DeleteAccountSecurity
}

type DeleteAccountResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
