package operations

import (
"openapi/pkg/models/shared")


type SendTaskSuccessXAmzTargetEnum string

const (
    SendTaskSuccessXAmzTargetEnumAwsStepFunctionsSendTaskSuccess SendTaskSuccessXAmzTargetEnum = "AWSStepFunctions.SendTaskSuccess"
)


type SendTaskSuccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SendTaskSuccessXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SendTaskSuccessRequest struct {
    Headers SendTaskSuccessHeaders 
    Request shared.SendTaskSuccessInput `request:"mediaType=application/json"`
    
}

type SendTaskSuccessResponse struct {
    ContentType string 
    InvalidOutput *interface{} 
    InvalidToken *interface{} 
    SendTaskSuccessOutput map[string]interface{} 
    StatusCode int64 
    TaskDoesNotExist *interface{} 
    TaskTimedOut *interface{} 
    
}

