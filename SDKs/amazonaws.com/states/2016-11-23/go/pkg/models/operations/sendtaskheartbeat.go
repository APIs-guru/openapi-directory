package operations

import (
"openapi/pkg/models/shared")


type SendTaskHeartbeatXAmzTargetEnum string

const (
    SendTaskHeartbeatXAmzTargetEnumAwsStepFunctionsSendTaskHeartbeat SendTaskHeartbeatXAmzTargetEnum = "AWSStepFunctions.SendTaskHeartbeat"
)


type SendTaskHeartbeatHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SendTaskHeartbeatXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SendTaskHeartbeatRequest struct {
    Headers SendTaskHeartbeatHeaders 
    Request shared.SendTaskHeartbeatInput `request:"mediaType=application/json"`
    
}

type SendTaskHeartbeatResponse struct {
    ContentType string 
    InvalidToken *interface{} 
    SendTaskHeartbeatOutput map[string]interface{} 
    StatusCode int64 
    TaskDoesNotExist *interface{} 
    TaskTimedOut *interface{} 
    
}

