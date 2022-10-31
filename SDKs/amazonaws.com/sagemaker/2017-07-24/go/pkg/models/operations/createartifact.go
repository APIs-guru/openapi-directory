package operations

import (
	"openapi/pkg/models/shared"
)

type CreateArtifactXAmzTargetEnum string

const (
	CreateArtifactXAmzTargetEnumSageMakerCreateArtifact CreateArtifactXAmzTargetEnum = "SageMaker.CreateArtifact"
)

type CreateArtifactHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
