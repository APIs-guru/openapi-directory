package operations

import (
"openapi/pkg/models/shared")

type GroupV2GetRecommendedGroupsPathParams struct {
    CreateDateRange int32 `pathParam:"style=simple,explode=false,name=createDateRange"`
    GroupType int32 `pathParam:"style=simple,explode=false,name=groupType"`
    
}

type GroupV2GetRecommendedGroupsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GroupV2GetRecommendedGroupsRequest struct {
    PathParams GroupV2GetRecommendedGroupsPathParams 
    Security GroupV2GetRecommendedGroupsSecurity 
    
}

type GroupV2GetRecommendedGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

