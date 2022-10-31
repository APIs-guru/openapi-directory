package operations

import (
	"openapi/pkg/models/shared"
)

type RequestEmailVerificationQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type RequestEmailVerificationSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type RequestEmailVerificationRequest struct {
	QueryParams RequestEmailVerificationQueryParams
	Security    RequestEmailVerificationSecurity
}

type RequestEmailVerificationResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
