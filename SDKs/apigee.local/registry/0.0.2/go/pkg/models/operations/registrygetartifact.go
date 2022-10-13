package operations

type RegistryGetArtifactPathParams struct {
	Artifact string `pathParam:"style=simple,explode=false,name=artifact"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type RegistryGetArtifactRequest struct {
	PathParams RegistryGetArtifactPathParams
}

type RegistryGetArtifactResponse struct {
	Artifact    *interface{}
	ContentType string
	StatusCode  int64
}
