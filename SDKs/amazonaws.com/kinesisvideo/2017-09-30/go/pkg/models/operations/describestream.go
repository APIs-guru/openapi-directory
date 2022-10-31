package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStreamHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeStreamRequestBody struct {
	StreamArn  *string `json:"StreamARN,omitempty"`
	StreamName *string `json:"StreamName,omitempty"`
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
