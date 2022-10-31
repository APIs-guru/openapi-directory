package operations

import (
"openapi/pkg/models/shared")

type OrgsListFailedInvitationsPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type OrgsListFailedInvitationsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type OrgsListFailedInvitationsRequest struct {
    PathParams OrgsListFailedInvitationsPathParams 
    QueryParams OrgsListFailedInvitationsQueryParams 
    
}

type OrgsListFailedInvitationsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    OrganizationInvitations []shared.OrganizationInvitation 
    
}

