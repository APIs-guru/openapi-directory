package operations

import (
"openapi/pkg/models/shared")


type CreateEndpointConfigXAmzTargetEnum string

const (
    CreateEndpointConfigXAmzTargetEnumSageMakerCreateEndpointConfig CreateEndpointConfigXAmzTargetEnum = "SageMaker.CreateEndpointConfig"
)


type CreateEndpointConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateEndpointConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateEndpointConfigRequest struct {
    Headers CreateEndpointConfigHeaders 
    Request shared.CreateEndpointConfigInput `request:"mediaType=application/json"`
    
}

type CreateEndpointConfigResponse struct {
    ContentType string 
    CreateEndpointConfigOutput *shared.CreateEndpointConfigOutput 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

