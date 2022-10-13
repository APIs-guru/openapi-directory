package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStudioLifecycleConfigXAmzTargetEnum string

const (
	CreateStudioLifecycleConfigXAmzTargetEnumSageMakerCreateStudioLifecycleConfig CreateStudioLifecycleConfigXAmzTargetEnum = "SageMaker.CreateStudioLifecycleConfig"
)

type CreateStudioLifecycleConfigHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateStudioLifecycleConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateStudioLifecycleConfigRequest struct {
	Headers CreateStudioLifecycleConfigHeaders
	Request shared.CreateStudioLifecycleConfigRequest `request:"mediaType=application/json"`
}

type CreateStudioLifecycleConfigResponse struct {
	ContentType                         string
	CreateStudioLifecycleConfigResponse *shared.CreateStudioLifecycleConfigResponse
	ResourceInUse                       *interface{}
	StatusCode                          int64
}
