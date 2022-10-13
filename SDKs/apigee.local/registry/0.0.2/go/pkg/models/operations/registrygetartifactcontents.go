package operations

type RegistryGetArtifactContentsPathParams struct {
	Artifact string `pathParam:"style=simple,explode=false,name=artifact"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type RegistryGetArtifactContentsRequest struct {
	PathParams RegistryGetArtifactContentsPathParams
}

type RegistryGetArtifactContentsResponse struct {
	ContentType string
	StatusCode  int64
}
