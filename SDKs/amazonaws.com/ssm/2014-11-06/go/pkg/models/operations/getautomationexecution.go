package operations

import (
	"openapi/pkg/models/shared"
)

type GetAutomationExecutionXAmzTargetEnum string

const (
	GetAutomationExecutionXAmzTargetEnumAmazonSsmGetAutomationExecution GetAutomationExecutionXAmzTargetEnum = "AmazonSSM.GetAutomationExecution"
)

type GetAutomationExecutionHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAutomationExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAutomationExecutionRequest struct {
	Headers GetAutomationExecutionHeaders
	Request shared.GetAutomationExecutionRequest `request:"mediaType=application/json"`
}

type GetAutomationExecutionResponse struct {
	AutomationExecutionNotFoundException *interface{}
	ContentType                          string
	GetAutomationExecutionResult         *shared.GetAutomationExecutionResult
	InternalServerError                  *interface{}
	StatusCode                           int64
}
