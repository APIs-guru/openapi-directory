package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateArtifactXAmzTargetEnum string

const (
	UpdateArtifactXAmzTargetEnumSageMakerUpdateArtifact UpdateArtifactXAmzTargetEnum = "SageMaker.UpdateArtifact"
)

type UpdateArtifactHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateArtifactXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateArtifactRequest struct {
	Headers UpdateArtifactHeaders
	Request shared.UpdateArtifactRequest `request:"mediaType=application/json"`
}

type UpdateArtifactResponse struct {
	ConflictException      *interface{}
	ContentType            string
	ResourceNotFound       *interface{}
	StatusCode             int64
	UpdateArtifactResponse *shared.UpdateArtifactResponse
}
