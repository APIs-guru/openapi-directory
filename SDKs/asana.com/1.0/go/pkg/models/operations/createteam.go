package operations

import (
"openapi/pkg/models/shared")

type CreateTeamQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type CreateTeamRequestBody struct {
    Data *shared.TeamRequest `json:"data,omitempty"`
    
}

type CreateTeamRequest struct {
    QueryParams CreateTeamQueryParams 
    Request CreateTeamRequestBody `request:"mediaType=application/json"`
    
}

type CreateTeam201ApplicationJSON struct {
    Data *shared.TeamResponse `json:"data,omitempty"`
    
}

type CreateTeamResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    CreateTeam201ApplicationJSONObject *CreateTeam201ApplicationJSON 
    
}

