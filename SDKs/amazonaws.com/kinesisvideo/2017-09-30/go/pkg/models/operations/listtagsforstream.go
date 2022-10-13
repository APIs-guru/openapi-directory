package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTagsForStreamRequestBody struct {
	NextToken  *string `json:"NextToken"`
	StreamArn  *string `json:"StreamARN"`
	StreamName *string `json:"StreamName"`
}

type ListTagsForStreamRequest struct {
	Headers ListTagsForStreamHeaders
	Request ListTagsForStreamRequestBody `request:"mediaType=application/json"`
}

type ListTagsForStreamResponse struct {
	ClientLimitExceededException   *interface{}
	ContentType                    string
	InvalidArgumentException       *interface{}
	InvalidResourceFormatException *interface{}
	ListTagsForStreamOutput        *shared.ListTagsForStreamOutput
	NotAuthorizedException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
