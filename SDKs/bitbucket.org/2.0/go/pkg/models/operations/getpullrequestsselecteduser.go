package operations

import (
"openapi/pkg/models/shared")

type GetPullrequestsSelectedUserPathParams struct {
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    
}


type GetPullrequestsSelectedUserStateEnum string

const (
    GetPullrequestsSelectedUserStateEnumMerged GetPullrequestsSelectedUserStateEnum = "MERGED"
GetPullrequestsSelectedUserStateEnumSuperseded GetPullrequestsSelectedUserStateEnum = "SUPERSEDED"
GetPullrequestsSelectedUserStateEnumOpen GetPullrequestsSelectedUserStateEnum = "OPEN"
GetPullrequestsSelectedUserStateEnumDeclined GetPullrequestsSelectedUserStateEnum = "DECLINED"
)


type GetPullrequestsSelectedUserQueryParams struct {
    State *GetPullrequestsSelectedUserStateEnum `queryParam:"style=form,explode=true,name=state"`
    
}

type GetPullrequestsSelectedUserSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetPullrequestsSelectedUserSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetPullrequestsSelectedUserSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetPullrequestsSelectedUserSecurity struct {
    Option1 *GetPullrequestsSelectedUserSecurityOption1 `security:"option"`
    Option2 *GetPullrequestsSelectedUserSecurityOption2 `security:"option"`
    Option3 *GetPullrequestsSelectedUserSecurityOption3 `security:"option"`
    
}

type GetPullrequestsSelectedUserRequest struct {
    PathParams GetPullrequestsSelectedUserPathParams 
    QueryParams GetPullrequestsSelectedUserQueryParams 
    Security GetPullrequestsSelectedUserSecurity 
    
}

type GetPullrequestsSelectedUserResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedPullrequests *shared.PaginatedPullrequests 
    
}

