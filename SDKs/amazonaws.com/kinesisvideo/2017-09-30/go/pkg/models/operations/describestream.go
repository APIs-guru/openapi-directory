package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeStreamRequestBody struct {
	StreamArn  *string `json:"StreamARN"`
	StreamName *string `json:"StreamName"`
}

type DescribeStreamRequest struct {
	Headers DescribeStreamHeaders
	Request DescribeStreamRequestBody `request:"mediaType=application/json"`
}

type DescribeStreamResponse struct {
	ClientLimitExceededException *interface{}
	ContentType                  string
	DescribeStreamOutput         *shared.DescribeStreamOutput
	InvalidArgumentException     *interface{}
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
