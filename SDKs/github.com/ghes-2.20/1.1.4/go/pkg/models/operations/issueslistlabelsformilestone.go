package operations

import (
"openapi/pkg/models/shared")

type IssuesListLabelsForMilestonePathParams struct {
    MilestoneNumber int64 `pathParam:"style=simple,explode=false,name=milestone_number"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type IssuesListLabelsForMilestoneQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type IssuesListLabelsForMilestoneRequest struct {
    PathParams IssuesListLabelsForMilestonePathParams 
    QueryParams IssuesListLabelsForMilestoneQueryParams 
    
}

type IssuesListLabelsForMilestoneResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Labels []shared.Label 
    
}

