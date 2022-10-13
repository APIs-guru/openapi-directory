package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourceQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTagsForResourceXAmzTargetEnum string

const (
	ListTagsForResourceXAmzTargetEnumAwsProton20200720ListTagsForResource ListTagsForResourceXAmzTargetEnum = "AwsProton20200720.ListTagsForResource"
)

type ListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsForResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTagsForResourceRequest struct {
	QueryParams ListTagsForResourceQueryParams
	Headers     ListTagsForResourceHeaders
	Request     shared.ListTagsForResourceInput `request:"mediaType=application/json"`
}

type ListTagsForResourceResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListTagsForResourceOutput *shared.ListTagsForResourceOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
