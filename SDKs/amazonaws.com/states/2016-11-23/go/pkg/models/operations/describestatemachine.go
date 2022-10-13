package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStateMachineXAmzTargetEnum string

const (
	DescribeStateMachineXAmzTargetEnumAwsStepFunctionsDescribeStateMachine DescribeStateMachineXAmzTargetEnum = "AWSStepFunctions.DescribeStateMachine"
)

type DescribeStateMachineHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStateMachineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeStateMachineRequest struct {
	Headers DescribeStateMachineHeaders
	Request shared.DescribeStateMachineInput `request:"mediaType=application/json"`
}

type DescribeStateMachineResponse struct {
	ContentType                string
	DescribeStateMachineOutput *shared.DescribeStateMachineOutput
	InvalidArn                 *interface{}
	StateMachineDoesNotExist   *interface{}
	StatusCode                 int64
}
