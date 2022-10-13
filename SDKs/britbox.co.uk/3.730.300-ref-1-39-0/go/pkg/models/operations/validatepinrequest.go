package operations

import (
	"openapi/pkg/models/shared"
)

type ValidatePinRequestQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type ValidatePinRequestRequest struct {
	QueryParams ValidatePinRequestQueryParams
	Request     shared.EeValidatePinRequest `request:"mediaType=application/json"`
}

type ValidatePinRequestResponse struct {
	ContentType           string
	EeValidatePinResponse *shared.EeValidatePinResponse
	ServiceError          *shared.ServiceError
	StatusCode            int64
}
