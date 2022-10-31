package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2GetBannedMembersOfGroupPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupV2GetBannedMembersOfGroupQueryParams struct {
	Currentpage int32 `queryParam:"style=form,explode=true,name=currentpage"`
}

type GroupV2GetBannedMembersOfGroupSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2GetBannedMembersOfGroupRequest struct {
	PathParams  GroupV2GetBannedMembersOfGroupPathParams
	QueryParams GroupV2GetBannedMembersOfGroupQueryParams
	Security    GroupV2GetBannedMembersOfGroupSecurity
}

type GroupV2GetBannedMembersOfGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
