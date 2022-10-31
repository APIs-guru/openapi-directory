package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2BanMemberPathParams struct {
	GroupID        int64 `pathParam:"style=simple,explode=false,name=groupId"`
	MembershipID   int64 `pathParam:"style=simple,explode=false,name=membershipId"`
	MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
}

type GroupV2BanMemberSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2BanMemberRequest struct {
	PathParams GroupV2BanMemberPathParams
	Security   GroupV2BanMemberSecurity
}

type GroupV2BanMemberResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
