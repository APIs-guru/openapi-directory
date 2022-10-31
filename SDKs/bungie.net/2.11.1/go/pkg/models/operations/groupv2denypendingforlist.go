package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2DenyPendingForListPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupV2DenyPendingForListSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2DenyPendingForListRequest struct {
	PathParams GroupV2DenyPendingForListPathParams
	Security   GroupV2DenyPendingForListSecurity
}

type GroupV2DenyPendingForListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
