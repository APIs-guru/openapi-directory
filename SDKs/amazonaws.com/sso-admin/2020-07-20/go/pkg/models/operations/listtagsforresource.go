package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourceQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTagsForResourceXAmzTargetEnum string

const (
	ListTagsForResourceXAmzTargetEnumSwbExternalServiceListTagsForResource ListTagsForResourceXAmzTargetEnum = "SWBExternalService.ListTagsForResource"
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
	Request     shared.ListTagsForResourceRequest `request:"mediaType=application/json"`
}

type ListTagsForResourceResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ListTagsForResourceResponse *shared.ListTagsForResourceResponse
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
