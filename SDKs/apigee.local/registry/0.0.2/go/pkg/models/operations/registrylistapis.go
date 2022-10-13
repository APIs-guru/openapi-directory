package operations

type RegistryListApisPathParams struct {
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type RegistryListApisQueryParams struct {
	Filter    *string `queryParam:"style=form,explode=true,name=filter"`
	PageSize  *string `queryParam:"style=form,explode=true,name=page_size"`
	PageToken *string `queryParam:"style=form,explode=true,name=page_token"`
}

type RegistryListApisRequest struct {
	PathParams  RegistryListApisPathParams
	QueryParams RegistryListApisQueryParams
}

type RegistryListApisResponse struct {
	ContentType      string
	ListApisResponse *interface{}
	StatusCode       int64
}
