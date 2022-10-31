package operations

import (
"openapi/pkg/models/shared")


type PutDestinationXAmzTargetEnum string

const (
    PutDestinationXAmzTargetEnumLogs20140328PutDestination PutDestinationXAmzTargetEnum = "Logs_20140328.PutDestination"
)


type PutDestinationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutDestinationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutDestinationRequest struct {
    Headers PutDestinationHeaders 
    Request shared.PutDestinationRequest `request:"mediaType=application/json"`
    
}

type PutDestinationResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    OperationAbortedException *interface{} 
    PutDestinationResponse *shared.PutDestinationResponse 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

