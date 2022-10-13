package operations

import (
	"openapi/pkg/models/shared"
)

type GetActivityTaskXAmzTargetEnum string

const (
	GetActivityTaskXAmzTargetEnumAwsStepFunctionsGetActivityTask GetActivityTaskXAmzTargetEnum = "AWSStepFunctions.GetActivityTask"
)

type GetActivityTaskHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetActivityTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetActivityTaskRequest struct {
	Headers GetActivityTaskHeaders
	Request shared.GetActivityTaskInput `request:"mediaType=application/json"`
}

type GetActivityTaskResponse struct {
	ActivityDoesNotExist        *interface{}
	ActivityWorkerLimitExceeded *interface{}
	ContentType                 string
	GetActivityTaskOutput       *shared.GetActivityTaskOutput
	InvalidArn                  *interface{}
	StatusCode                  int64
}
