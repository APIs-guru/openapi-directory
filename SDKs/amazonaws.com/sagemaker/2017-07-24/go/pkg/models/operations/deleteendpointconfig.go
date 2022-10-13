package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEndpointConfigXAmzTargetEnum string

const (
	DeleteEndpointConfigXAmzTargetEnumSageMakerDeleteEndpointConfig DeleteEndpointConfigXAmzTargetEnum = "SageMaker.DeleteEndpointConfig"
)

type DeleteEndpointConfigHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEndpointConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteEndpointConfigRequest struct {
	Headers DeleteEndpointConfigHeaders
	Request shared.DeleteEndpointConfigInput `request:"mediaType=application/json"`
}

type DeleteEndpointConfigResponse struct {
	ContentType string
	StatusCode  int64
}
