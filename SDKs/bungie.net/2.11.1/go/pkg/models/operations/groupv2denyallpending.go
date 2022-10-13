package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2DenyAllPendingPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupV2DenyAllPendingSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2DenyAllPendingRequest struct {
	PathParams GroupV2DenyAllPendingPathParams
	Security   GroupV2DenyAllPendingSecurity
}

type GroupV2DenyAllPendingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
