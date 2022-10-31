package operations

import (
"openapi/pkg/models/shared")

type GroupV2ApprovePendingForListPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type GroupV2ApprovePendingForListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GroupV2ApprovePendingForListRequest struct {
    PathParams GroupV2ApprovePendingForListPathParams 
    Security GroupV2ApprovePendingForListSecurity 
    
}

type GroupV2ApprovePendingForListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

