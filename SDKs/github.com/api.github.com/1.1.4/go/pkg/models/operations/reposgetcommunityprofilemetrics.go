package operations

import (
"openapi/pkg/models/shared")

type ReposGetCommunityProfileMetricsPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetCommunityProfileMetricsRequest struct {
    PathParams ReposGetCommunityProfileMetricsPathParams 
    
}

type ReposGetCommunityProfileMetricsResponse struct {
    ContentType string 
    StatusCode int64 
    CommunityProfile *shared.CommunityProfile 
    
}

