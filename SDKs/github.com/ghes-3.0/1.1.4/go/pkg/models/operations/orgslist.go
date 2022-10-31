package operations

import (
"openapi/pkg/models/shared")

type OrgsListQueryParams struct {
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Since *int64 `queryParam:"style=form,explode=true,name=since"`
    
}

type OrgsListRequest struct {
    QueryParams OrgsListQueryParams 
    
}

type OrgsListResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    OrganizationSimples []shared.OrganizationSimple 
    
}

