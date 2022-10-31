package operations

import (
"openapi/pkg/models/shared")

type TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups struct {
    GroupDescription string `json:"group_description"`
    GroupID string `json:"group_id"`
    GroupName string `json:"group_name"`
    
}

type TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody struct {
    Groups []TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups `json:"groups"`
    
}

type TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest struct {
    PathParams TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams 
    Request *TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody `request:"mediaType=application/json"`
    
}

type TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse struct {
    ContentType string 
    StatusCode int64 
    GroupMapping *shared.GroupMapping 
    
}

