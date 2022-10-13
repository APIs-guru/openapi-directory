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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListContactsRequestBodyFilter struct {
	FilteredStatus *shared.SubscriptionStatusEnum `json:"FilteredStatus"`
	TopicFilter    *shared.TopicFilter            `json:"TopicFilter"`
}

type ListContactsRequestBody struct {
	Filter *ListContactsRequestBodyFilter `json:"Filter"`
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
