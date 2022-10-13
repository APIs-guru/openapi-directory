package operations

type GetConnectorPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetConnectorQueryParams struct {
	IncludeEvse         *bool `queryParam:"style=form,explode=true,name=include_evse"`
	IncludeOrganization *bool `queryParam:"style=form,explode=true,name=include_organization"`
	IncludeRate         *bool `queryParam:"style=form,explode=true,name=include_rate"`
}

type GetConnectorRequest struct {
	PathParams  GetConnectorPathParams
	QueryParams GetConnectorQueryParams
}

type GetConnectorResponse struct {
	ContentType string
	StatusCode  int64
}
