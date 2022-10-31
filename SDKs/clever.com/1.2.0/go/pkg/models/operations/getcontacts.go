package operations

import (
	"openapi/pkg/models/shared"
)

type GetContactsQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
}

type GetContactsRequest struct {
	QueryParams GetContactsQueryParams
}

type GetContactsResponse struct {
	ContentType             string
	StatusCode              int64
	StudentContactsResponse *shared.StudentContactsResponse
}
