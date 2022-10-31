package operations

import (
"openapi/pkg/models/shared")


type DeleteStateMachineXAmzTargetEnum string

const (
    DeleteStateMachineXAmzTargetEnumAwsStepFunctionsDeleteStateMachine DeleteStateMachineXAmzTargetEnum = "AWSStepFunctions.DeleteStateMachine"
)


type DeleteStateMachineHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteStateMachineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteStateMachineRequest struct {
    Headers DeleteStateMachineHeaders 
    Request shared.DeleteStateMachineInput `request:"mediaType=application/json"`
    
}

type DeleteStateMachineResponse struct {
    ContentType string 
    DeleteStateMachineOutput map[string]interface{} 
    InvalidArn *interface{} 
    StatusCode int64 
    
}

