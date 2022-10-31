package operations

type RegistryListProjectsQueryParams struct {
	Filter    *string `queryParam:"style=form,explode=true,name=filter"`
	PageSize  *string `queryParam:"style=form,explode=true,name=page_size"`
	PageToken *string `queryParam:"style=form,explode=true,name=page_token"`
}

type RegistryListProjectsRequest struct {
	QueryParams RegistryListProjectsQueryParams
}

type RegistryListProjectsResponse struct {
	ContentType          string
	ListProjectsResponse *interface{}
	StatusCode           int64
}
