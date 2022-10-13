package operations

type RegistryGetProjectPathParams struct {
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type RegistryGetProjectRequest struct {
	PathParams RegistryGetProjectPathParams
}

type RegistryGetProjectResponse struct {
	ContentType string
	Project     *interface{}
	StatusCode  int64
}
