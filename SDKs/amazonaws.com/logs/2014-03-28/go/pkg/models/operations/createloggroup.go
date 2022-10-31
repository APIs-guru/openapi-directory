package operations

import (
"openapi/pkg/models/shared")


type CreateLogGroupXAmzTargetEnum string

const (
    CreateLogGroupXAmzTargetEnumLogs20140328CreateLogGroup CreateLogGroupXAmzTargetEnum = "Logs_20140328.CreateLogGroup"
)


type CreateLogGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateLogGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateLogGroupRequest struct {
    Headers CreateLogGroupHeaders 
    Request shared.CreateLogGroupRequest `request:"mediaType=application/json"`
    
}

type CreateLogGroupResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    OperationAbortedException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

