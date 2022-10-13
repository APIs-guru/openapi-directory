package operations

type RegistryGetAPIVersionPathParams struct {
	API     string `pathParam:"style=simple,explode=false,name=api"`
	Project string `pathParam:"style=simple,explode=false,name=project"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type RegistryGetAPIVersionRequest struct {
	PathParams RegistryGetAPIVersionPathParams
}

type RegistryGetAPIVersionResponse struct {
	APIVersion  *interface{}
	ContentType string
	StatusCode  int64
}
