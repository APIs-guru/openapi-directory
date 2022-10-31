package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2IndividualGroupInviteCancelPathParams struct {
	GroupID        int64 `pathParam:"style=simple,explode=false,name=groupId"`
	MembershipID   int64 `pathParam:"style=simple,explode=false,name=membershipId"`
	MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
}

type GroupV2IndividualGroupInviteCancelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2IndividualGroupInviteCancelRequest struct {
	PathParams GroupV2IndividualGroupInviteCancelPathParams
	Security   GroupV2IndividualGroupInviteCancelSecurity
}

type GroupV2IndividualGroupInviteCancelResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
