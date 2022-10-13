package operations

import (
	"openapi/pkg/models/shared"
)

type ListPagesByEngagementQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPagesByEngagementXAmzTargetEnum string

const (
	ListPagesByEngagementXAmzTargetEnumSsmContactsListPagesByEngagement ListPagesByEngagementXAmzTargetEnum = "SSMContacts.ListPagesByEngagement"
)

type ListPagesByEngagementHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPagesByEngagementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPagesByEngagementRequest struct {
	QueryParams ListPagesByEngagementQueryParams
	Headers     ListPagesByEngagementHeaders
	Request     shared.ListPagesByEngagementRequest `request:"mediaType=application/json"`
}

type ListPagesByEngagementResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ListPagesByEngagementResult *shared.ListPagesByEngagementResult
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
