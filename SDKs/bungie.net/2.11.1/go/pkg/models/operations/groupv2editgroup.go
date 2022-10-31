package operations

import (
"openapi/pkg/models/shared")

type GroupV2EditGroupPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type GroupV2EditGroupSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GroupV2EditGroupRequest struct {
    PathParams GroupV2EditGroupPathParams 
    Security GroupV2EditGroupSecurity 
    
}

type GroupV2EditGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

