package operations

import (
"openapi/pkg/models/shared")

type ReactionsListForCommitCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}


type ReactionsListForCommitCommentContentEnum string

const (
    ReactionsListForCommitCommentContentEnumPlus1 ReactionsListForCommitCommentContentEnum = "+1"
ReactionsListForCommitCommentContentEnumMinus1 ReactionsListForCommitCommentContentEnum = "-1"
ReactionsListForCommitCommentContentEnumLaugh ReactionsListForCommitCommentContentEnum = "laugh"
ReactionsListForCommitCommentContentEnumConfused ReactionsListForCommitCommentContentEnum = "confused"
ReactionsListForCommitCommentContentEnumHeart ReactionsListForCommitCommentContentEnum = "heart"
ReactionsListForCommitCommentContentEnumHooray ReactionsListForCommitCommentContentEnum = "hooray"
ReactionsListForCommitCommentContentEnumRocket ReactionsListForCommitCommentContentEnum = "rocket"
ReactionsListForCommitCommentContentEnumEyes ReactionsListForCommitCommentContentEnum = "eyes"
)


type ReactionsListForCommitCommentQueryParams struct {
    Content *ReactionsListForCommitCommentContentEnum `queryParam:"style=form,explode=true,name=content"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReactionsListForCommitCommentRequest struct {
    PathParams ReactionsListForCommitCommentPathParams 
    QueryParams ReactionsListForCommitCommentQueryParams 
    
}

type ReactionsListForCommitComment415ApplicationJSON struct {
    DocumentationURL string `json:"documentation_url"`
    Message string `json:"message"`
    
}

type ReactionsListForCommitCommentResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Reactions []shared.Reaction 
    ReactionsListForCommitComment415ApplicationJSONObject *ReactionsListForCommitComment415ApplicationJSON 
    
}

