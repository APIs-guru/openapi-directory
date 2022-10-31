package operations

import (
"openapi/pkg/models/shared")

type ReposGetCommitActivityStatsPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetCommitActivityStatsRequest struct {
    PathParams ReposGetCommitActivityStatsPathParams 
    
}

type ReposGetCommitActivityStatsResponse struct {
    ContentType string 
    StatusCode int64 
    CommitActivities []shared.CommitActivity 
    ReposGetCommitActivityStats202ApplicationJSONObject map[string]interface{} 
    
}

