package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3BoardsQueryParams struct {
	BoardRelationship *shared.BoardRelationshipEnum `queryParam:"style=form,explode=true,name=board_relationship"`
	Page              *int32                        `queryParam:"style=form,explode=true,name=page"`
	PageSize          *int32                        `queryParam:"style=form,explode=true,name=pageSize"`
	SortOrder         *shared.BoardSortOrderEnum    `queryParam:"style=form,explode=true,name=sort_order"`
}

type GetV3BoardsRequest struct {
	QueryParams GetV3BoardsQueryParams
}

type GetV3BoardsResponse struct {
	BoardList   *shared.BoardList
	ContentType string
	StatusCode  int64
}
