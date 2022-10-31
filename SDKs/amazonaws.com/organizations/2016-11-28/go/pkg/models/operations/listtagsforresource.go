package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourceQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTagsForResourceXAmzTargetEnum string

const (
	ListTagsForResourceXAmzTargetEnumAwsOrganizationsV20161128ListTagsForResource ListTagsForResourceXAmzTargetEnum = "AWSOrganizationsV20161128.ListTagsForResource"
)

type ListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsForResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTagsForResourceRequest struct {
	QueryParams ListTagsForResourceQueryParams
	Headers     ListTagsForResourceHeaders
	Request     shared.ListTagsForResourceRequest `request:"mediaType=application/json"`
}

type ListTagsForResourceResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	ListTagsForResourceResponse       *shared.ListTagsForResourceResponse
	ServiceException                  *interface{}
	StatusCode                        int64
	TargetNotFoundException           *interface{}
	TooManyRequestsException          *interface{}
}
