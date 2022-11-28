package operations

import (
	"openapi/pkg/models/shared"
)

type GetPullrequestsSelectedUserPathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
}

type GetPullrequestsSelectedUserStateEnum string

const (
	GetPullrequestsSelectedUserStateEnumMerged     GetPullrequestsSelectedUserStateEnum = "MERGED"
	GetPullrequestsSelectedUserStateEnumSuperseded GetPullrequestsSelectedUserStateEnum = "SUPERSEDED"
	GetPullrequestsSelectedUserStateEnumOpen       GetPullrequestsSelectedUserStateEnum = "OPEN"
	GetPullrequestsSelectedUserStateEnumDeclined   GetPullrequestsSelectedUserStateEnum = "DECLINED"
)

type GetPullrequestsSelectedUserQueryParams struct {
	State *GetPullrequestsSelectedUserStateEnum `queryParam:"style=form,explode=true,name=state"`
}

type GetPullrequestsSelectedUserSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetPullrequestsSelectedUserRequest struct {
	PathParams  GetPullrequestsSelectedUserPathParams
	QueryParams GetPullrequestsSelectedUserQueryParams
	Security    GetPullrequestsSelectedUserSecurity
}

type GetPullrequestsSelectedUserResponse struct {
	ContentType           string
	StatusCode            int64
	Error                 map[string]interface{}
	PaginatedPullrequests *shared.PaginatedPullrequests
}
