package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2ApprovePendingPathParams struct {
	GroupID        int64 `pathParam:"style=simple,explode=false,name=groupId"`
	MembershipID   int64 `pathParam:"style=simple,explode=false,name=membershipId"`
	MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
}

type GroupV2ApprovePendingSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2ApprovePendingRequest struct {
	PathParams GroupV2ApprovePendingPathParams
	Security   GroupV2ApprovePendingSecurity
}

type GroupV2ApprovePendingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
