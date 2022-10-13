package operations

import (
	"openapi/pkg/models/shared"
)

type CancelTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type CancelTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelTaskRequest struct {
	PathParams CancelTaskPathParams
	Headers    CancelTaskHeaders
}

type CancelTaskResponse struct {
	AccessDeniedException     *interface{}
	CancelTaskOutput          *shared.CancelTaskOutput
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
