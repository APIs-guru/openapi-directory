package operations

import (
"openapi/pkg/models/shared")

type TeamsGetMembershipsPathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type TeamsGetMembershipsQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    OrderType *string `queryParam:"style=form,explode=true,name=orderType"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type TeamsGetMembershipsSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type TeamsGetMembershipsRequest struct {
    PathParams TeamsGetMembershipsPathParams 
    QueryParams TeamsGetMembershipsQueryParams 
    Security TeamsGetMembershipsSecurity 
    
}

type TeamsGetMembershipsResponse struct {
    ContentType string 
    StatusCode int64 
    MembershipList *shared.MembershipList 
    
}

