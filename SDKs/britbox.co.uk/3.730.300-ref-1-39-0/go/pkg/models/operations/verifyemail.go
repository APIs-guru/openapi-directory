package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyEmailQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type VerifyEmailSecurity struct {
	VerifyEmailAuth shared.SchemeVerifyEmailAuth `security:"scheme,type=apiKey,subtype=header"`
}

type VerifyEmailRequest struct {
	QueryParams VerifyEmailQueryParams
	Security    VerifyEmailSecurity
}

type VerifyEmailResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
