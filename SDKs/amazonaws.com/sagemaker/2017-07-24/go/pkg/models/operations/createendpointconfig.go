package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEndpointConfigXAmzTargetEnum string

const (
	CreateEndpointConfigXAmzTargetEnumSageMakerCreateEndpointConfig CreateEndpointConfigXAmzTargetEnum = "SageMaker.CreateEndpointConfig"
)

type CreateEndpointConfigHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEndpointConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEndpointConfigRequest struct {
	Headers CreateEndpointConfigHeaders
	Request shared.CreateEndpointConfigInput `request:"mediaType=application/json"`
}

type CreateEndpointConfigResponse struct {
	ContentType                string
	CreateEndpointConfigOutput *shared.CreateEndpointConfigOutput
	ResourceLimitExceeded      *interface{}
	StatusCode                 int64
}
