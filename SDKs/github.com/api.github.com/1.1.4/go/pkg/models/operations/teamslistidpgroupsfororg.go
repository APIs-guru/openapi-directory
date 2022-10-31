package operations

import (
"openapi/pkg/models/shared")

type TeamsListIdpGroupsForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type TeamsListIdpGroupsForOrgQueryParams struct {
    Page *string `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type TeamsListIdpGroupsForOrgRequest struct {
    PathParams TeamsListIdpGroupsForOrgPathParams 
    QueryParams TeamsListIdpGroupsForOrgQueryParams 
    
}

type TeamsListIdpGroupsForOrgResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GroupMapping *shared.GroupMapping 
    
}

