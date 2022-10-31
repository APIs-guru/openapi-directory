package operations

import (
"openapi/pkg/models/shared")


type DeleteRealtimeEndpointXAmzTargetEnum string

const (
    DeleteRealtimeEndpointXAmzTargetEnumAmazonMl20141212DeleteRealtimeEndpoint DeleteRealtimeEndpointXAmzTargetEnum = "AmazonML_20141212.DeleteRealtimeEndpoint"
)


type DeleteRealtimeEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteRealtimeEndpointXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteRealtimeEndpointRequest struct {
    Headers DeleteRealtimeEndpointHeaders 
    Request shared.DeleteRealtimeEndpointInput `request:"mediaType=application/json"`
    
}

type DeleteRealtimeEndpointResponse struct {
    ContentType string 
    DeleteRealtimeEndpointOutput *shared.DeleteRealtimeEndpointOutput 
    InternalServerException *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

