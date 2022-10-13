package operations

type RegistryDeleteArtifactPathParams struct {
	Artifact string `pathParam:"style=simple,explode=false,name=artifact"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type RegistryDeleteArtifactRequest struct {
	PathParams RegistryDeleteArtifactPathParams
}

type RegistryDeleteArtifactResponse struct {
	ContentType string
	StatusCode  int64
}
