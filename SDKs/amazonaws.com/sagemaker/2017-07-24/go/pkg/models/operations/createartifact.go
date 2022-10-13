package operations

import (
	"openapi/pkg/models/shared"
)

type CreateArtifactXAmzTargetEnum string

const (
	CreateArtifactXAmzTargetEnumSageMakerCreateArtifact CreateArtifactXAmzTargetEnum = "SageMaker.CreateArtifact"
)

type CreateArtifactHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateArtifactXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateArtifactRequest struct {
	Headers CreateArtifactHeaders
	Request shared.CreateArtifactRequest `request:"mediaType=application/json"`
}

type CreateArtifactResponse struct {
	ContentType            string
	CreateArtifactResponse *shared.CreateArtifactResponse
	ResourceLimitExceeded  *interface{}
	StatusCode             int64
}
