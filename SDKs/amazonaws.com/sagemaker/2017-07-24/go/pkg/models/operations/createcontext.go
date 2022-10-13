package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContextXAmzTargetEnum string

const (
	CreateContextXAmzTargetEnumSageMakerCreateContext CreateContextXAmzTargetEnum = "SageMaker.CreateContext"
)

type CreateContextHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateContextXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateContextRequest struct {
	Headers CreateContextHeaders
	Request shared.CreateContextRequest `request:"mediaType=application/json"`
}

type CreateContextResponse struct {
	ContentType           string
	CreateContextResponse *shared.CreateContextResponse
	ResourceLimitExceeded *interface{}
	StatusCode            int64
}
