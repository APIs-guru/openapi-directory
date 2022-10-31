package operations

import (
	"openapi/pkg/models/shared"
)

type SendTaskFailureXAmzTargetEnum string

const (
	SendTaskFailureXAmzTargetEnumAwsStepFunctionsSendTaskFailure SendTaskFailureXAmzTargetEnum = "AWSStepFunctions.SendTaskFailure"
)

type SendTaskFailureHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SendTaskFailureXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SendTaskFailureRequest struct {
	Headers SendTaskFailureHeaders
	Request shared.SendTaskFailureInput `request:"mediaType=application/json"`
}

type SendTaskFailureResponse struct {
	ContentType           string
	InvalidToken          *interface{}
	SendTaskFailureOutput map[string]interface{}
	StatusCode            int64
	TaskDoesNotExist      *interface{}
	TaskTimedOut          *interface{}
}
