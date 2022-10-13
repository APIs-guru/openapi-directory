package operations

type RegistryCreateArtifactPathParams struct {
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type RegistryCreateArtifactQueryParams struct {
	ArtifactID *string `queryParam:"style=form,explode=true,name=artifact_id"`
}

type RegistryCreateArtifactRequest struct {
	PathParams  RegistryCreateArtifactPathParams
	QueryParams RegistryCreateArtifactQueryParams
	Request     interface{} `request:"mediaType=application/json"`
}

type RegistryCreateArtifactResponse struct {
	Artifact    *interface{}
	ContentType string
	StatusCode  int64
}
