package operations

import (
	"openapi/pkg/models/shared"
)

type GetLikesPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetLikesQueryParams struct {
	NumberOfResults *float64 `queryParam:"style=form,explode=true,name=numberOfResults"`
	SearchPointer   *string  `queryParam:"style=form,explode=true,name=searchPointer"`
}

type GetLikesSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLikesRequest struct {
	PathParams  GetLikesPathParams
	QueryParams GetLikesQueryParams
	Security    GetLikesSecurity
}

type GetLikesResponse struct {
	Body                   []byte
	ContentType            string
	ParticipantsLikeResult *interface{}
	StatusCode             int64
}
