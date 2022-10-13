package operations

import (
	"openapi/pkg/models/shared"
)

type InvokeEndpointAsyncPathParams struct {
	EndpointName string `pathParam:"style=simple,explode=false,name=EndpointName"`
}

type InvokeEndpointAsyncHeaders struct {
	XAmzAlgorithm                   *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256               *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential                  *string `header:"name=X-Amz-Credential"`
	XAmzDate                        *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken               *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature                   *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders               *string `header:"name=X-Amz-SignedHeaders"`
	XAmznSageMakerAccept            *string `header:"name=X-Amzn-SageMaker-Accept"`
	XAmznSageMakerContentType       *string `header:"name=X-Amzn-SageMaker-Content-Type"`
	XAmznSageMakerCustomAttributes  *string `header:"name=X-Amzn-SageMaker-Custom-Attributes"`
	XAmznSageMakerInferenceID       *string `header:"name=X-Amzn-SageMaker-Inference-Id"`
	XAmznSageMakerInputLocation     string  `header:"name=X-Amzn-SageMaker-InputLocation"`
	XAmznSageMakerRequestTTLSeconds *int64  `header:"name=X-Amzn-SageMaker-RequestTTLSeconds"`
}

type InvokeEndpointAsyncRequest struct {
	PathParams InvokeEndpointAsyncPathParams
	Headers    InvokeEndpointAsyncHeaders
}

type InvokeEndpointAsyncResponse struct {
	ContentType               string
	InternalFailure           *interface{}
	InvokeEndpointAsyncOutput *shared.InvokeEndpointAsyncOutput
	ServiceUnavailable        *interface{}
	StatusCode                int64
	ValidationError           *interface{}
}
