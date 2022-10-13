package operations

type GetOrganizationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetOrganizationQueryParams struct {
	IncludeLocations *bool `queryParam:"style=form,explode=true,name=include_locations"`
}

type GetOrganizationRequest struct {
	PathParams  GetOrganizationPathParams
	QueryParams GetOrganizationQueryParams
}

type GetOrganizationResponse struct {
	ContentType string
	StatusCode  int64
}
