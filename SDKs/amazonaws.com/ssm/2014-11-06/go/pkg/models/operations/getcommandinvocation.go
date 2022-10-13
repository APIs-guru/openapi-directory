package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommandInvocationXAmzTargetEnum string

const (
	GetCommandInvocationXAmzTargetEnumAmazonSsmGetCommandInvocation GetCommandInvocationXAmzTargetEnum = "AmazonSSM.GetCommandInvocation"
)

type GetCommandInvocationHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCommandInvocationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCommandInvocationRequest struct {
	Headers GetCommandInvocationHeaders
	Request shared.GetCommandInvocationRequest `request:"mediaType=application/json"`
}

type GetCommandInvocationResponse struct {
	ContentType                string
	GetCommandInvocationResult *shared.GetCommandInvocationResult
	InternalServerError        *interface{}
	InvalidCommandID           *interface{}
	InvalidInstanceID          *interface{}
	InvalidPluginName          *interface{}
	InvocationDoesNotExist     *interface{}
	StatusCode                 int64
}
