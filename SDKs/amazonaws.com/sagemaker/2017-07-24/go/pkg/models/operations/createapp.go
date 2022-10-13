package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAppXAmzTargetEnum string

const (
	CreateAppXAmzTargetEnumSageMakerCreateApp CreateAppXAmzTargetEnum = "SageMaker.CreateApp"
)

type CreateAppHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAppXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAppRequest struct {
	Headers CreateAppHeaders
	Request shared.CreateAppRequest `request:"mediaType=application/json"`
}

type CreateAppResponse struct {
	ContentType           string
	CreateAppResponse     *shared.CreateAppResponse
	ResourceInUse         *interface{}
	ResourceLimitExceeded *interface{}
	StatusCode            int64
}
