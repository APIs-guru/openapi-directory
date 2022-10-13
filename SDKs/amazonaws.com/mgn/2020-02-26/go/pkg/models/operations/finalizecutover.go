package operations

import (
	"openapi/pkg/models/shared"
)

type FinalizeCutoverHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type FinalizeCutoverRequestBody struct {
	SourceServerID string `json:"sourceServerID"`
}

type FinalizeCutoverRequest struct {
	Headers FinalizeCutoverHeaders
	Request FinalizeCutoverRequestBody `request:"mediaType=application/json"`
}

type FinalizeCutoverResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	ResourceNotFoundException     *interface{}
	SourceServer                  *shared.SourceServer
	StatusCode                    int64
	UninitializedAccountException *interface{}
	ValidationException           *interface{}
}
