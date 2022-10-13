package operations

type GetVehiclePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVehicleQueryParams struct {
	IncludeDriver       *bool `queryParam:"style=form,explode=true,name=include_driver"`
	IncludeOrganization *bool `queryParam:"style=form,explode=true,name=include_organization"`
	IncludeToken        *bool `queryParam:"style=form,explode=true,name=include_token"`
}

type GetVehicleRequest struct {
	PathParams  GetVehiclePathParams
	QueryParams GetVehicleQueryParams
}

type GetVehicleResponse struct {
	ContentType string
	StatusCode  int64
}
