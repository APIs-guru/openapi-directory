package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListTagsForResourceRequestBody struct {
	NextToken   *string `json:"NextToken,omitempty"`
	ResourceArn string  `json:"ResourceARN"`
}

type ListTagsForResourceRequest struct {
	Headers ListTagsForResourceHeaders
	Request ListTagsForResourceRequestBody `request:"mediaType=application/json"`
}

type ListTagsForResourceResponse struct {
	AccessDeniedException        *interface{}
	ClientLimitExceededException *interface{}
	ContentType                  string
	InvalidArgumentException     *interface{}
	ListTagsForResourceOutput    *shared.ListTagsForResourceOutput
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
