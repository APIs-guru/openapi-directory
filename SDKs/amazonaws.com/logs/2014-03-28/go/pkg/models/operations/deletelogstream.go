package operations

import (
"openapi/pkg/models/shared")


type DeleteLogStreamXAmzTargetEnum string

const (
    DeleteLogStreamXAmzTargetEnumLogs20140328DeleteLogStream DeleteLogStreamXAmzTargetEnum = "Logs_20140328.DeleteLogStream"
)


type DeleteLogStreamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteLogStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteLogStreamRequest struct {
    Headers DeleteLogStreamHeaders 
    Request shared.DeleteLogStreamRequest `request:"mediaType=application/json"`
    
}

type DeleteLogStreamResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    OperationAbortedException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

