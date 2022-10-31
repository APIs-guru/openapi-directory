package operations

import (
"openapi/pkg/models/shared")


type DeleteSubscriptionFilterXAmzTargetEnum string

const (
    DeleteSubscriptionFilterXAmzTargetEnumLogs20140328DeleteSubscriptionFilter DeleteSubscriptionFilterXAmzTargetEnum = "Logs_20140328.DeleteSubscriptionFilter"
)


type DeleteSubscriptionFilterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteSubscriptionFilterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteSubscriptionFilterRequest struct {
    Headers DeleteSubscriptionFilterHeaders 
    Request shared.DeleteSubscriptionFilterRequest `request:"mediaType=application/json"`
    
}

type DeleteSubscriptionFilterResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    OperationAbortedException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

