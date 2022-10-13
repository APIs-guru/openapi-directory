package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveModeratorsPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type RemoveModeratorsRequestBody struct {
	Moderators []string `form:"name=moderators"`
}

type RemoveModeratorsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type RemoveModeratorsRequest struct {
	PathParams RemoveModeratorsPathParams
	Request    RemoveModeratorsRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   RemoveModeratorsSecurity
}

type RemoveModeratorsResponse struct {
	ContentType string
	StatusCode  int64
}
