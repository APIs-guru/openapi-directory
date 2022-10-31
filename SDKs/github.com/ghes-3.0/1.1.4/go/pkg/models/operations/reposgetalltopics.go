package operations

import (
"openapi/pkg/models/shared")

type ReposGetAllTopicsPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetAllTopicsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReposGetAllTopicsRequest struct {
    PathParams ReposGetAllTopicsPathParams 
    QueryParams ReposGetAllTopicsQueryParams 
    
}

type ReposGetAllTopics415ApplicationJSON struct {
    DocumentationURL string `json:"documentation_url"`
    Message string `json:"message"`
    
}

type ReposGetAllTopicsResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ReposGetAllTopics415ApplicationJSONObject *ReposGetAllTopics415ApplicationJSON 
    Topic *shared.Topic 
    
}

