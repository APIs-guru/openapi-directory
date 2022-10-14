package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
	ContentType                 string
	InvalidRequestException     *interface{}
	ListTagsForResourceResponse *shared.ListTagsForResourceResponse
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottledException          *interface{}
}
