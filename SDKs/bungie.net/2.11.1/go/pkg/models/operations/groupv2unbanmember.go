package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2UnbanMemberPathParams struct {
	GroupID        int64 `pathParam:"style=simple,explode=false,name=groupId"`
	MembershipID   int64 `pathParam:"style=simple,explode=false,name=membershipId"`
	MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
}

type GroupV2UnbanMemberSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2UnbanMemberRequest struct {
	PathParams GroupV2UnbanMemberPathParams
	Security   GroupV2UnbanMemberSecurity
}

type GroupV2UnbanMemberResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
