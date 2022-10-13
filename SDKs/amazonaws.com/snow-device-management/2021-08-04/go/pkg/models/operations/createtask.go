package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateTaskRequestBodyCommand struct {
	Reboot map[string]interface{} `json:"reboot"`
	Unlock map[string]interface{} `json:"unlock"`
}

type CreateTaskRequestBody struct {
	ClientToken *string                      `json:"clientToken"`
	Command     CreateTaskRequestBodyCommand `json:"command"`
	Description *string                      `json:"description"`
	Tags        map[string]string            `json:"tags"`
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
