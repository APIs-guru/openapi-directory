package operations

import (
"openapi/pkg/models/shared")

type GetProjectsForTeamPathParams struct {
    TeamGid string `pathParam:"style=simple,explode=false,name=team_gid"`
    
}

type GetProjectsForTeamQueryParams struct {
    Archived *bool `queryParam:"style=form,explode=true,name=archived"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetProjectsForTeamRequest struct {
    PathParams GetProjectsForTeamPathParams 
    QueryParams GetProjectsForTeamQueryParams 
    
}

type GetProjectsForTeam200ApplicationJSON struct {
    Data []shared.ProjectCompact `json:"data,omitempty"`
    
}

type GetProjectsForTeamResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetProjectsForTeam200ApplicationJSONObject *GetProjectsForTeam200ApplicationJSON 
    
}

