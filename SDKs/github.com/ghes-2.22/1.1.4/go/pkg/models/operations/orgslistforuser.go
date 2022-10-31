package operations

import (
"openapi/pkg/models/shared")

type OrgsListForUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type OrgsListForUserQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type OrgsListForUserRequest struct {
    PathParams OrgsListForUserPathParams 
    QueryParams OrgsListForUserQueryParams 
    
}

type OrgsListForUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    OrganizationSimples []shared.OrganizationSimple 
    
}

