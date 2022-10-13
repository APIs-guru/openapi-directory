package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateNonceQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type GenerateNonceSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type GenerateNonceRequest struct {
	QueryParams GenerateNonceQueryParams
	Security    GenerateNonceSecurity
}

type GenerateNonceResponse struct {
	AccountNonce *shared.AccountNonce
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
