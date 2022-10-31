package operations

import (
	"openapi/pkg/models/shared"
)

type GetTaxonomyTermsQueryParams struct {
	APIKey       *string `queryParam:"style=form,explode=true,name=api_key"`
	BodySubtype  *string `queryParam:"style=form,explode=true,name=body_subtype"`
	BodyType     *string `queryParam:"style=form,explode=true,name=body_type"`
	Drivetrain   *string `queryParam:"style=form,explode=true,name=drivetrain"`
	Engine       *string `queryParam:"style=form,explode=true,name=engine"`
	EngineBlock  *string `queryParam:"style=form,explode=true,name=engine_block"`
	EngineSize   *string `queryParam:"style=form,explode=true,name=engine_size"`
	Field        string  `queryParam:"style=form,explode=true,name=field"`
	FuelType     *string `queryParam:"style=form,explode=true,name=fuel_type"`
	Make         *string `queryParam:"style=form,explode=true,name=make"`
	Model        *string `queryParam:"style=form,explode=true,name=model"`
	Transmission *string `queryParam:"style=form,explode=true,name=transmission"`
	Trim         *string `queryParam:"style=form,explode=true,name=trim"`
	VehicleType  *string `queryParam:"style=form,explode=true,name=vehicle_type"`
	Year         *string `queryParam:"style=form,explode=true,name=year"`
}

type GetTaxonomyTermsRequest struct {
	QueryParams GetTaxonomyTermsQueryParams
}

type GetTaxonomyTermsResponse struct {
	ContentType               string
	Error                     *shared.Error
	SpecsAutoCompleteResponse *shared.SpecsAutoCompleteResponse
	StatusCode                int64
}
