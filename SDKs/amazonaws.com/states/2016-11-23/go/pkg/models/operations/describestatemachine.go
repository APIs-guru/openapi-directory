package operations

import (
"openapi/pkg/models/shared")


type DescribeStateMachineXAmzTargetEnum string

const (
    DescribeStateMachineXAmzTargetEnumAwsStepFunctionsDescribeStateMachine DescribeStateMachineXAmzTargetEnum = "AWSStepFunctions.DescribeStateMachine"
)


type DescribeStateMachineHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeStateMachineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeStateMachineRequest struct {
    Headers DescribeStateMachineHeaders 
    Request shared.DescribeStateMachineInput `request:"mediaType=application/json"`
    
}

type DescribeStateMachineResponse struct {
    ContentType string 
    DescribeStateMachineOutput *shared.DescribeStateMachineOutput 
    InvalidArn *interface{} 
    StateMachineDoesNotExist *interface{} 
    StatusCode int64 
    
}

