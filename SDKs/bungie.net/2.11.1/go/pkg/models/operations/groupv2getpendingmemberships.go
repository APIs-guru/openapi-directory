package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2GetPendingMembershipsPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupV2GetPendingMembershipsQueryParams struct {
	Currentpage int32 `queryParam:"style=form,explode=true,name=currentpage"`
}

type GroupV2GetPendingMembershipsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2GetPendingMembershipsRequest struct {
	PathParams  GroupV2GetPendingMembershipsPathParams
	QueryParams GroupV2GetPendingMembershipsQueryParams
	Security    GroupV2GetPendingMembershipsSecurity
}

type GroupV2GetPendingMembershipsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
