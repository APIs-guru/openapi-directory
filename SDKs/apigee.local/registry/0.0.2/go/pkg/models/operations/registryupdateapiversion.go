package operations

type RegistryUpdateAPIVersionPathParams struct {
	API     string `pathParam:"style=simple,explode=false,name=api"`
	Project string `pathParam:"style=simple,explode=false,name=project"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type RegistryUpdateAPIVersionQueryParams struct {
	UpdateMask *string `queryParam:"style=form,explode=true,name=update_mask"`
}

type RegistryUpdateAPIVersionRequest struct {
	PathParams  RegistryUpdateAPIVersionPathParams
	QueryParams RegistryUpdateAPIVersionQueryParams
	Request     interface{} `request:"mediaType=application/json"`
}

type RegistryUpdateAPIVersionResponse struct {
	APIVersion  *interface{}
	ContentType string
	StatusCode  int64
}
