package operations

import (
	"openapi/pkg/models/shared"
)

type GetEligibleOffersQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type GetEligibleOffersRequest struct {
	QueryParams GetEligibleOffersQueryParams
	Request     shared.EeOffersRequest `request:"mediaType=application/json"`
}

type GetEligibleOffersResponse struct {
	ContentType      string
	EeOffersResponse *shared.EeOffersResponse
	ServiceError     *shared.ServiceError
	StatusCode       int64
}
