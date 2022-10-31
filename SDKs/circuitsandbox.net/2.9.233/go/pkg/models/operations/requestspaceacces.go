package operations

import (
	"openapi/pkg/models/shared"
)

type RequestSpaceAccesPathParams struct {
	SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
}

type RequestSpaceAccesRequestBody struct {
	Reason *string `form:"name=reason"`
}

type RequestSpaceAccesSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type RequestSpaceAccesRequest struct {
	PathParams RequestSpaceAccesPathParams
	Request    *RequestSpaceAccesRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   RequestSpaceAccesSecurity
}

type RequestSpaceAccesResponse struct {
	ContentType string
	StatusCode  int64
}
