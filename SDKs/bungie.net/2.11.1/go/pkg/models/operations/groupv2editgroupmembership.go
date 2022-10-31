package operations

import (
"openapi/pkg/models/shared")

type GroupV2EditGroupMembershipPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    MemberType int32 `pathParam:"style=simple,explode=false,name=memberType"`
    MembershipID int64 `pathParam:"style=simple,explode=false,name=membershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type GroupV2EditGroupMembershipSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GroupV2EditGroupMembershipRequest struct {
    PathParams GroupV2EditGroupMembershipPathParams 
    Security GroupV2EditGroupMembershipSecurity 
    
}

type GroupV2EditGroupMembershipResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

