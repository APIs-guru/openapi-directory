package operations

type RegistryListArtifactsPathParams struct {
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type RegistryListArtifactsQueryParams struct {
	Filter    *string `queryParam:"style=form,explode=true,name=filter"`
	PageSize  *string `queryParam:"style=form,explode=true,name=page_size"`
	PageToken *string `queryParam:"style=form,explode=true,name=page_token"`
}

type RegistryListArtifactsRequest struct {
	PathParams  RegistryListArtifactsPathParams
	QueryParams RegistryListArtifactsQueryParams
}

type RegistryListArtifactsResponse struct {
	ContentType           string
	ListArtifactsResponse *interface{}
	StatusCode            int64
}
