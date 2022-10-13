package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAppImageConfigXAmzTargetEnum string

const (
	CreateAppImageConfigXAmzTargetEnumSageMakerCreateAppImageConfig CreateAppImageConfigXAmzTargetEnum = "SageMaker.CreateAppImageConfig"
)

type CreateAppImageConfigHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAppImageConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAppImageConfigRequest struct {
	Headers CreateAppImageConfigHeaders
	Request shared.CreateAppImageConfigRequest `request:"mediaType=application/json"`
}

type CreateAppImageConfigResponse struct {
	ContentType                  string
	CreateAppImageConfigResponse *shared.CreateAppImageConfigResponse
	ResourceInUse                *interface{}
	StatusCode                   int64
}
