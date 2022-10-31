package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2EditFounderOptionsPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupV2EditFounderOptionsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2EditFounderOptionsRequest struct {
	PathParams GroupV2EditFounderOptionsPathParams
	Security   GroupV2EditFounderOptionsSecurity
}

type GroupV2EditFounderOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
