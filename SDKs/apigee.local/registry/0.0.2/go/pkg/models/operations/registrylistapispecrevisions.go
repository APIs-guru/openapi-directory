package operations

type RegistryListAPISpecRevisionsPathParams struct {
	API     string `pathParam:"style=simple,explode=false,name=api"`
	Project string `pathParam:"style=simple,explode=false,name=project"`
	Spec    string `pathParam:"style=simple,explode=false,name=spec"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type RegistryListAPISpecRevisionsQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=page_size"`
	PageToken *string `queryParam:"style=form,explode=true,name=page_token"`
}

type RegistryListAPISpecRevisionsRequest struct {
	PathParams  RegistryListAPISpecRevisionsPathParams
	QueryParams RegistryListAPISpecRevisionsQueryParams
}

type RegistryListAPISpecRevisionsResponse struct {
	ContentType                  string
	ListAPISpecRevisionsResponse *interface{}
	StatusCode                   int64
}
