package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersMeVideosVideoIDRatingPathParams struct {
	VideoID int64 `pathParam:"style=simple,explode=false,name=videoId"`
}

type GetUsersMeVideosVideoIDRatingSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetUsersMeVideosVideoIDRatingRequest struct {
	PathParams GetUsersMeVideosVideoIDRatingPathParams
	Security   GetUsersMeVideosVideoIDRatingSecurity
}

type GetUsersMeVideosVideoIDRatingResponse struct {
	ContentType      string
	GetMeVideoRating *interface{}
	StatusCode       int64
}
