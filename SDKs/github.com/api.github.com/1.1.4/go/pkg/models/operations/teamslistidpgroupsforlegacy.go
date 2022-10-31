package operations

import (
"openapi/pkg/models/shared")

type TeamsListIdpGroupsForLegacyPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsListIdpGroupsForLegacyRequest struct {
    PathParams TeamsListIdpGroupsForLegacyPathParams 
    
}

type TeamsListIdpGroupsForLegacyResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    GroupMapping *shared.GroupMapping 
    
}

