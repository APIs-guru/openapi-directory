package operations

type RegistryGetAPISpecContentsPathParams struct {
	API     string `pathParam:"style=simple,explode=false,name=api"`
	Project string `pathParam:"style=simple,explode=false,name=project"`
	Spec    string `pathParam:"style=simple,explode=false,name=spec"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type RegistryGetAPISpecContentsRequest struct {
	PathParams RegistryGetAPISpecContentsPathParams
}

type RegistryGetAPISpecContentsResponse struct {
	ContentType string
	StatusCode  int64
}
