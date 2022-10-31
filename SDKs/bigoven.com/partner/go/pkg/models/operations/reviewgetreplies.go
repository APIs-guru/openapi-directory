package operations

import (
	"openapi/pkg/models/shared"
)

type ReviewGetRepliesPathParams struct {
	ReviewID string `pathParam:"style=simple,explode=false,name=reviewId"`
}

type ReviewGetRepliesQueryParams struct {
	Pg  *int32 `queryParam:"style=form,explode=true,name=pg"`
	Rpp *int32 `queryParam:"style=form,explode=true,name=rpp"`
}

type ReviewGetRepliesRequest struct {
	PathParams  ReviewGetRepliesPathParams
	QueryParams ReviewGetRepliesQueryParams
}

type ReviewGetRepliesResponse struct {
	BigOvenModelAPIReplies []shared.BigOvenModelAPIReply
	Body                   []byte
	ContentType            string
	StatusCode             int64
}
