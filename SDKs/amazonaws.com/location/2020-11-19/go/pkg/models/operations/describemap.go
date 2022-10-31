package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMapPathParams struct {
	MapName string `pathParam:"style=simple,explode=false,name=MapName"`
}

type DescribeMapHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeMapRequest struct {
	PathParams DescribeMapPathParams
	Headers    DescribeMapHeaders
}

type DescribeMapResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeMapResponse       *shared.DescribeMapResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
