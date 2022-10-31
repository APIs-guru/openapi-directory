package operations

import (
"openapi/pkg/models/shared")

type InvokeEndpointAsyncPathParams struct {
    EndpointName string `pathParam:"style=simple,explode=false,name=EndpointName"`
    
}

type InvokeEndpointAsyncHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmznSageMakerAccept *string `header:"style=simple,explode=false,name=X-Amzn-SageMaker-Accept"`
    XAmznSageMakerContentType *string `header:"style=simple,explode=false,name=X-Amzn-SageMaker-Content-Type"`
    XAmznSageMakerCustomAttributes *string `header:"style=simple,explode=false,name=X-Amzn-SageMaker-Custom-Attributes"`
    XAmznSageMakerInferenceID *string `header:"style=simple,explode=false,name=X-Amzn-SageMaker-Inference-Id"`
    XAmznSageMakerInputLocation string `header:"style=simple,explode=false,name=X-Amzn-SageMaker-InputLocation"`
    XAmznSageMakerRequestTTLSeconds *int64 `header:"style=simple,explode=false,name=X-Amzn-SageMaker-RequestTTLSeconds"`
    
}

type InvokeEndpointAsyncRequest struct {
    PathParams InvokeEndpointAsyncPathParams 
    Headers InvokeEndpointAsyncHeaders 
    
}

type InvokeEndpointAsyncResponse struct {
    ContentType string 
    InternalFailure *interface{} 
    InvokeEndpointAsyncOutput *shared.InvokeEndpointAsyncOutput 
    ServiceUnavailable *interface{} 
    StatusCode int64 
    ValidationError *interface{} 
    
}

