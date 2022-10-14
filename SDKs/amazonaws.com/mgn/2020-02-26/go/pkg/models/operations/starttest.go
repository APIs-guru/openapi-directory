package operations

import (
	"openapi/pkg/models/shared"
)

type StartTestHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartTestRequestBody struct {
	SourceServerIDs []string          `json:"sourceServerIDs"`
	Tags            map[string]string `json:"tags,omitempty"`
}

type StartTestRequest struct {
	Headers StartTestHeaders
	Request StartTestRequestBody `request:"mediaType=application/json"`
}

type StartTestResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	StartTestResponse             *shared.StartTestResponse
	StatusCode                    int64
	UninitializedAccountException *interface{}
	ValidationException           *interface{}
}
