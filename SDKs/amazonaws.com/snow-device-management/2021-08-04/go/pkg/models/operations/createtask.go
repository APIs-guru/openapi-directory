package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTaskHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateTaskRequestBodyCommand struct {
	Reboot map[string]interface{} `json:"reboot,omitempty"`
	Unlock map[string]interface{} `json:"unlock,omitempty"`
}

type CreateTaskRequestBody struct {
	ClientToken *string                      `json:"clientToken,omitempty"`
	Command     CreateTaskRequestBodyCommand `json:"command"`
	Description *string                      `json:"description,omitempty"`
	Tags        map[string]string            `json:"tags,omitempty"`
	Targets     []string                     `json:"targets"`
}

type CreateTaskRequest struct {
	Headers CreateTaskHeaders
	Request CreateTaskRequestBody `request:"mediaType=application/json"`
}

type CreateTaskResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	CreateTaskOutput              *shared.CreateTaskOutput
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
