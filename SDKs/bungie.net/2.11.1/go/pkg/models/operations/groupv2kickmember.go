package operations

import (
"openapi/pkg/models/shared")

type GroupV2KickMemberPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    MembershipID int64 `pathParam:"style=simple,explode=false,name=membershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type GroupV2KickMemberSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GroupV2KickMemberRequest struct {
    PathParams GroupV2KickMemberPathParams 
    Security GroupV2KickMemberSecurity 
    
}

type GroupV2KickMemberResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

