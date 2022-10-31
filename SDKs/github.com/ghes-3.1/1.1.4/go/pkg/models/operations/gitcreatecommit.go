package operations

import (
"time"
"openapi/pkg/models/shared")

type GitCreateCommitPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type GitCreateCommitRequestBodyAuthor struct {
    Date *time.Time `json:"date,omitempty"`
    Email string `json:"email"`
    Name string `json:"name"`
    
}

type GitCreateCommitRequestBodyCommitter struct {
    Date *time.Time `json:"date,omitempty"`
    Email *string `json:"email,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type GitCreateCommitRequestBody struct {
    Author *GitCreateCommitRequestBodyAuthor `json:"author,omitempty"`
    Committer *GitCreateCommitRequestBodyCommitter `json:"committer,omitempty"`
    Message string `json:"message"`
    Parents []string `json:"parents,omitempty"`
    Signature *string `json:"signature,omitempty"`
    Tree string `json:"tree"`
    
}

type GitCreateCommitRequest struct {
    PathParams GitCreateCommitPathParams 
    Request *GitCreateCommitRequestBody `request:"mediaType=application/json"`
    
}

type GitCreateCommitResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    GitCommit *shared.GitCommit 
    ValidationError *shared.ValidationError 
    
}

