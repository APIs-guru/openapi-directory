package operations

type RegistryDeleteAPIPathParams struct {
	API     string `pathParam:"style=simple,explode=false,name=api"`
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type RegistryDeleteAPIRequest struct {
	PathParams RegistryDeleteAPIPathParams
}

type RegistryDeleteAPIResponse struct {
	ContentType string
	StatusCode  int64
}
