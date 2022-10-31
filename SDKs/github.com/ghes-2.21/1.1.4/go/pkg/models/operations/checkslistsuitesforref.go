package operations

import (
"openapi/pkg/models/shared")

type ChecksListSuitesForRefPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Ref string `pathParam:"style=simple,explode=false,name=ref"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ChecksListSuitesForRefQueryParams struct {
    AppID *int64 `queryParam:"style=form,explode=true,name=app_id"`
    CheckName *string `queryParam:"style=form,explode=true,name=check_name"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ChecksListSuitesForRefRequest struct {
    PathParams ChecksListSuitesForRefPathParams 
    QueryParams ChecksListSuitesForRefQueryParams 
    
}

type ChecksListSuitesForRef200ApplicationJSON struct {
    CheckSuites []shared.CheckSuite `json:"check_suites"`
    TotalCount int64 `json:"total_count"`
    
}

type ChecksListSuitesForRefResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ChecksListSuitesForRef200ApplicationJSONObject *ChecksListSuitesForRef200ApplicationJSON 
    
}

