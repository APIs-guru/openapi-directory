package operations

import (
	"openapi/pkg/models/shared"
)

type AddFavoritePathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type AddFavoriteSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AddFavoriteRequest struct {
	PathParams AddFavoritePathParams
	Security   AddFavoriteSecurity
}

type AddFavoriteResponse struct {
	ContentType string
	StatusCode  int64
}
