package operations

import (
"openapi/pkg/models/shared")

type TeamsListPendingInvitationsInOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type TeamsListPendingInvitationsInOrgQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type TeamsListPendingInvitationsInOrgRequest struct {
    PathParams TeamsListPendingInvitationsInOrgPathParams 
    QueryParams TeamsListPendingInvitationsInOrgQueryParams 
    
}

type TeamsListPendingInvitationsInOrgResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    OrganizationInvitations []shared.OrganizationInvitation 
    
}

