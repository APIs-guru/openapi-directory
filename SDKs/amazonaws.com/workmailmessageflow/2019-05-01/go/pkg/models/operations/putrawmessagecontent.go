package operations

import (
	"openapi/pkg/models/shared"
)

type PutRawMessageContentPathParams struct {
	MessageID string `pathParam:"style=simple,explode=false,name=messageId"`
}

type PutRawMessageContentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutRawMessageContentRequestBodyContent struct {
	S3Reference *shared.S3Reference `json:"s3Reference,omitempty"`
}

type PutRawMessageContentRequestBody struct {
	Content PutRawMessageContentRequestBodyContent `json:"content"`
}

type PutRawMessageContentRequest struct {
	PathParams PutRawMessageContentPathParams
	Headers    PutRawMessageContentHeaders
	Request    PutRawMessageContentRequestBody `request:"mediaType=application/json"`
}

type PutRawMessageContentResponse struct {
	ContentType                  string
	InvalidContentLocation       *interface{}
	MessageFrozen                *interface{}
	MessageRejected              *interface{}
	PutRawMessageContentResponse map[string]interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
