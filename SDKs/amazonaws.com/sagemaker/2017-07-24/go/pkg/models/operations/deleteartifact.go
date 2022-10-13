package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteArtifactXAmzTargetEnum string

const (
	DeleteArtifactXAmzTargetEnumSageMakerDeleteArtifact DeleteArtifactXAmzTargetEnum = "SageMaker.DeleteArtifact"
)

type DeleteArtifactHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteArtifactXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteArtifactRequest struct {
	Headers DeleteArtifactHeaders
	Request shared.DeleteArtifactRequest `request:"mediaType=application/json"`
}

type DeleteArtifactResponse struct {
	ContentType            string
	DeleteArtifactResponse *shared.DeleteArtifactResponse
	ResourceNotFound       *interface{}
	StatusCode             int64
}
