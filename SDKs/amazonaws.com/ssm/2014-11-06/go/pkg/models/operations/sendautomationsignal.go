package operations

import (
	"openapi/pkg/models/shared"
)

type SendAutomationSignalXAmzTargetEnum string

const (
	SendAutomationSignalXAmzTargetEnumAmazonSsmSendAutomationSignal SendAutomationSignalXAmzTargetEnum = "AmazonSSM.SendAutomationSignal"
)

type SendAutomationSignalHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SendAutomationSignalXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SendAutomationSignalRequest struct {
	Headers SendAutomationSignalHeaders
	Request shared.SendAutomationSignalRequest `request:"mediaType=application/json"`
}

type SendAutomationSignalResponse struct {
	AutomationExecutionNotFoundException *interface{}
	AutomationStepNotFoundException      *interface{}
	ContentType                          string
	InternalServerError                  *interface{}
	InvalidAutomationSignalException     *interface{}
	SendAutomationSignalResult           map[string]interface{}
	StatusCode                           int64
}
