package operations

import (
	"openapi/pkg/models/shared"
)

type InvokeEndpointPathParams struct {
	EndpointName string `pathParam:"style=simple,explode=false,name=EndpointName"`
}

type InvokeEndpointHeaders struct {
	Accept                                *string `header:"style=simple,explode=false,name=Accept"`
	ContentType                           *string `header:"style=simple,explode=false,name=Content-Type"`
	XAmzAlgorithm                         *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                     *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                        *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                              *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                     *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                         *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                     *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznSageMakerCustomAttributes        *string `header:"style=simple,explode=false,name=X-Amzn-SageMaker-Custom-Attributes"`
	XAmznSageMakerInferenceID             *string `header:"style=simple,explode=false,name=X-Amzn-SageMaker-Inference-Id"`
	XAmznSageMakerTargetContainerHostname *string `header:"style=simple,explode=false,name=X-Amzn-SageMaker-Target-Container-Hostname"`
	XAmznSageMakerTargetModel             *string `header:"style=simple,explode=false,name=X-Amzn-SageMaker-Target-Model"`
	XAmznSageMakerTargetVariant           *string `header:"style=simple,explode=false,name=X-Amzn-SageMaker-Target-Variant"`
}

type InvokeEndpointRequestBody struct {
	Body string `json:"Body"`
}

type InvokeEndpointRequest struct {
	PathParams InvokeEndpointPathParams
	Headers    InvokeEndpointHeaders
	Request    InvokeEndpointRequestBody `request:"mediaType=application/json"`
}

type InvokeEndpointResponse struct {
	ContentType          string
	InternalFailure      *interface{}
	InvokeEndpointOutput *shared.InvokeEndpointOutput
	ModelError           *interface{}
	ServiceUnavailable   *interface{}
	StatusCode           int64
	ValidationError      *interface{}
}
