package operations

import (
	"openapi/pkg/models/shared"
)

type ListContactsPathParams struct {
	ContactListName string `pathParam:"style=simple,explode=false,name=ContactListName"`
}

type ListContactsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListContactsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// ListContactsRequestBodyFilter
// A filter that can be applied to a list of contacts.
type ListContactsRequestBodyFilter struct {
	FilteredStatus *shared.SubscriptionStatusEnum `json:"FilteredStatus,omitempty"`
	TopicFilter    *shared.TopicFilter            `json:"TopicFilter,omitempty"`
}

type ListContactsRequestBody struct {
	Filter *ListContactsRequestBodyFilter `json:"Filter,omitempty"`
}

type ListContactsRequest struct {
	PathParams  ListContactsPathParams
	QueryParams ListContactsQueryParams
	Headers     ListContactsHeaders
	Request     ListContactsRequestBody `request:"mediaType=application/json"`
}

type ListContactsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	ListContactsResponse     *shared.ListContactsResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
