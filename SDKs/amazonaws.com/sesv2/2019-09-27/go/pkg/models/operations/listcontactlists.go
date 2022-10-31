package operations

import (
	"openapi/pkg/models/shared"
)

type ListContactListsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListContactListsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListContactListsRequest struct {
	QueryParams ListContactListsQueryParams
	Headers     ListContactListsHeaders
}

type ListContactListsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	ListContactListsResponse *shared.ListContactListsResponse
	StatusCode               int64
	TooManyRequestsException *interface{}
}
