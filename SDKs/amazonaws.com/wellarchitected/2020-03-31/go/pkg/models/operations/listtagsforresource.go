package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourcePathParams struct {
	WorkloadArn string `pathParam:"style=simple,explode=false,name=WorkloadArn"`
}

type ListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTagsForResourceRequest struct {
	PathParams ListTagsForResourcePathParams
	Headers    ListTagsForResourceHeaders
}

type ListTagsForResourceResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ListTagsForResourceOutput *shared.ListTagsForResourceOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
