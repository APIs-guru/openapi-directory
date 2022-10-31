package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2ApproveAllPendingPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupV2ApproveAllPendingSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2ApproveAllPendingRequest struct {
	PathParams GroupV2ApproveAllPendingPathParams
	Security   GroupV2ApproveAllPendingSecurity
}

type GroupV2ApproveAllPendingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
