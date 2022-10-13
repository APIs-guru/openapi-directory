package operations

import (
	"openapi/pkg/models/shared"
)

type StartCutoverHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartCutoverRequestBody struct {
	SourceServerIDs []string          `json:"sourceServerIDs"`
	Tags            map[string]string `json:"tags"`
}

type StartCutoverRequest struct {
	Headers StartCutoverHeaders
	Request StartCutoverRequestBody `request:"mediaType=application/json"`
}

type StartCutoverResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	StartCutoverResponse          *shared.StartCutoverResponse
	StatusCode                    int64
	UninitializedAccountException *interface{}
	ValidationException           *interface{}
}
