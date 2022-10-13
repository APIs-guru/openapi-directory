package operations

import (
	"openapi/pkg/models/shared"
)

type StopAutomationExecutionXAmzTargetEnum string

const (
	StopAutomationExecutionXAmzTargetEnumAmazonSsmStopAutomationExecution StopAutomationExecutionXAmzTargetEnum = "AmazonSSM.StopAutomationExecution"
)

type StopAutomationExecutionHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopAutomationExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopAutomationExecutionRequest struct {
	Headers StopAutomationExecutionHeaders
	Request shared.StopAutomationExecutionRequest `request:"mediaType=application/json"`
}

type StopAutomationExecutionResponse struct {
	AutomationExecutionNotFoundException   *interface{}
	ContentType                            string
	InternalServerError                    *interface{}
	InvalidAutomationStatusUpdateException *interface{}
	StatusCode                             int64
	StopAutomationExecutionResult          map[string]interface{}
}
