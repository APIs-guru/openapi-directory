package operations

import (
"openapi/pkg/models/shared")

type GitGetCommitPathParams struct {
    CommitSha string `pathParam:"style=simple,explode=false,name=commit_sha"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type GitGetCommitRequest struct {
    PathParams GitGetCommitPathParams 
    
}

type GitGetCommitResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    GitCommit *shared.GitCommit 
    
}

