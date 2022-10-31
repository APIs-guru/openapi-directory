package operations

import (
"openapi/pkg/models/shared")


type GetCommandInvocationXAmzTargetEnum string

const (
    GetCommandInvocationXAmzTargetEnumAmazonSsmGetCommandInvocation GetCommandInvocationXAmzTargetEnum = "AmazonSSM.GetCommandInvocation"
)


type GetCommandInvocationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetCommandInvocationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetCommandInvocationRequest struct {
    Headers GetCommandInvocationHeaders 
    Request shared.GetCommandInvocationRequest `request:"mediaType=application/json"`
    
}

type GetCommandInvocationResponse struct {
    ContentType string 
    GetCommandInvocationResult *shared.GetCommandInvocationResult 
    InternalServerError *interface{} 
    InvalidCommandID *interface{} 
    InvalidInstanceID *interface{} 
    InvalidPluginName *interface{} 
    InvocationDoesNotExist *interface{} 
    StatusCode int64 
    
}

