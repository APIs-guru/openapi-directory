package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteArtifactXAmzTargetEnum string

const (
	DeleteArtifactXAmzTargetEnumSageMakerDeleteArtifact DeleteArtifactXAmzTargetEnum = "SageMaker.DeleteArtifact"
)

type DeleteArtifactHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
