package operations

import (
	"openapi/pkg/models/shared"
)

type AddModeratorsPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type AddModeratorsRequestBody struct {
	Moderators []string `form:"name=moderators"`
}

type AddModeratorsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AddModeratorsRequest struct {
	PathParams AddModeratorsPathParams
	Request    AddModeratorsRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   AddModeratorsSecurity
}

type AddModeratorsResponse struct {
	ContentType string
	StatusCode  int64
}
