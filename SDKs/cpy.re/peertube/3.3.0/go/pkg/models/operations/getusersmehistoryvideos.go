package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersMeHistoryVideosQueryParams struct {
	Count  *int64  `queryParam:"style=form,explode=true,name=count"`
	Search *string `queryParam:"style=form,explode=true,name=search"`
	Start  *int64  `queryParam:"style=form,explode=true,name=start"`
}

type GetUsersMeHistoryVideosSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetUsersMeHistoryVideosRequest struct {
	QueryParams GetUsersMeHistoryVideosQueryParams
	Security    GetUsersMeHistoryVideosSecurity
}

type GetUsersMeHistoryVideosResponse struct {
	ContentType       string
	StatusCode        int64
	VideoListResponse *interface{}
}
