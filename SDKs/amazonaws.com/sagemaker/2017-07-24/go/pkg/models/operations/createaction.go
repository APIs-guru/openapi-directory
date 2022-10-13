package operations

import (
	"openapi/pkg/models/shared"
)

type CreateActionXAmzTargetEnum string

const (
	CreateActionXAmzTargetEnumSageMakerCreateAction CreateActionXAmzTargetEnum = "SageMaker.CreateAction"
)

type CreateActionHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateActionRequest struct {
	Headers CreateActionHeaders
	Request shared.CreateActionRequest `request:"mediaType=application/json"`
}

type CreateActionResponse struct {
	ContentType           string
	CreateActionResponse  *shared.CreateActionResponse
	ResourceLimitExceeded *interface{}
	StatusCode            int64
}
