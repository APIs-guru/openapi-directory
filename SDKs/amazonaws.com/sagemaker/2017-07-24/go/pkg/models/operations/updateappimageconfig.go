package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAppImageConfigXAmzTargetEnum string

const (
	UpdateAppImageConfigXAmzTargetEnumSageMakerUpdateAppImageConfig UpdateAppImageConfigXAmzTargetEnum = "SageMaker.UpdateAppImageConfig"
)

type UpdateAppImageConfigHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAppImageConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAppImageConfigRequest struct {
	Headers UpdateAppImageConfigHeaders
	Request shared.UpdateAppImageConfigRequest `request:"mediaType=application/json"`
}

type UpdateAppImageConfigResponse struct {
	ContentType                  string
	ResourceNotFound             *interface{}
	StatusCode                   int64
	UpdateAppImageConfigResponse *shared.UpdateAppImageConfigResponse
}
