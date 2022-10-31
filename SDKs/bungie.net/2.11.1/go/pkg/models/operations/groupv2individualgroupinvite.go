package operations

import (
"openapi/pkg/models/shared")

type GroupV2IndividualGroupInvitePathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    MembershipID int64 `pathParam:"style=simple,explode=false,name=membershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type GroupV2IndividualGroupInviteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GroupV2IndividualGroupInviteRequest struct {
    PathParams GroupV2IndividualGroupInvitePathParams 
    Security GroupV2IndividualGroupInviteSecurity 
    
}

type GroupV2IndividualGroupInviteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

