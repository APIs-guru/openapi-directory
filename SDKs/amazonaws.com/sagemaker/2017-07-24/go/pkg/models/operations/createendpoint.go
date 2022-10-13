package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEndpointXAmzTargetEnum string

const (
	CreateEndpointXAmzTargetEnumSageMakerCreateEndpoint CreateEndpointXAmzTargetEnum = "SageMaker.CreateEndpoint"
)

type CreateEndpointHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEndpointRequest struct {
	Headers CreateEndpointHeaders
	Request shared.CreateEndpointInput `request:"mediaType=application/json"`
}

type CreateEndpointResponse struct {
	ContentType           string
	CreateEndpointOutput  *shared.CreateEndpointOutput
	ResourceLimitExceeded *interface{}
	StatusCode            int64
}
