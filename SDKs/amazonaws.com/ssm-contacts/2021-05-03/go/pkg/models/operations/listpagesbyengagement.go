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
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPagesByEngagementXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
