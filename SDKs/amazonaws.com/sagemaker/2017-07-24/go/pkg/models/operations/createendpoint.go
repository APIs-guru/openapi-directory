package operations

import (
"openapi/pkg/models/shared")


type CreateEndpointXAmzTargetEnum string

const (
    CreateEndpointXAmzTargetEnumSageMakerCreateEndpoint CreateEndpointXAmzTargetEnum = "SageMaker.CreateEndpoint"
)


type CreateEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateEndpointXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateEndpointRequest struct {
    Headers CreateEndpointHeaders 
    Request shared.CreateEndpointInput `request:"mediaType=application/json"`
    
}

type CreateEndpointResponse struct {
    ContentType string 
    CreateEndpointOutput *shared.CreateEndpointOutput 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

