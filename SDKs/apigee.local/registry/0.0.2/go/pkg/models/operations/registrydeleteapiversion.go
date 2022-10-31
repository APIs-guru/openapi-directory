package operations

type RegistryDeleteAPIVersionPathParams struct {
	API     string `pathParam:"style=simple,explode=false,name=api"`
	Project string `pathParam:"style=simple,explode=false,name=project"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type RegistryDeleteAPIVersionRequest struct {
	PathParams RegistryDeleteAPIVersionPathParams
}

type RegistryDeleteAPIVersionResponse struct {
	ContentType string
	StatusCode  int64
}
