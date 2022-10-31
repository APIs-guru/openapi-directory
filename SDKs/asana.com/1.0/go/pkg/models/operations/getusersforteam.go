package operations

import (
"openapi/pkg/models/shared")

type GetUsersForTeamPathParams struct {
    TeamGid string `pathParam:"style=simple,explode=false,name=team_gid"`
    
}

type GetUsersForTeamQueryParams struct {
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetUsersForTeamRequest struct {
    PathParams GetUsersForTeamPathParams 
    QueryParams GetUsersForTeamQueryParams 
    
}

type GetUsersForTeam200ApplicationJSON struct {
    Data []shared.UserCompact `json:"data,omitempty"`
    
}

type GetUsersForTeamResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetUsersForTeam200ApplicationJSONObject *GetUsersForTeam200ApplicationJSON 
    
}

