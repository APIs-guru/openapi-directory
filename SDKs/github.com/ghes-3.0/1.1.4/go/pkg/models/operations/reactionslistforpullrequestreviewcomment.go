package operations

import (
"openapi/pkg/models/shared")

type ReactionsListForPullRequestReviewCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}


type ReactionsListForPullRequestReviewCommentContentEnum string

const (
    ReactionsListForPullRequestReviewCommentContentEnumPlus1 ReactionsListForPullRequestReviewCommentContentEnum = "+1"
ReactionsListForPullRequestReviewCommentContentEnumMinus1 ReactionsListForPullRequestReviewCommentContentEnum = "-1"
ReactionsListForPullRequestReviewCommentContentEnumLaugh ReactionsListForPullRequestReviewCommentContentEnum = "laugh"
ReactionsListForPullRequestReviewCommentContentEnumConfused ReactionsListForPullRequestReviewCommentContentEnum = "confused"
ReactionsListForPullRequestReviewCommentContentEnumHeart ReactionsListForPullRequestReviewCommentContentEnum = "heart"
ReactionsListForPullRequestReviewCommentContentEnumHooray ReactionsListForPullRequestReviewCommentContentEnum = "hooray"
ReactionsListForPullRequestReviewCommentContentEnumRocket ReactionsListForPullRequestReviewCommentContentEnum = "rocket"
ReactionsListForPullRequestReviewCommentContentEnumEyes ReactionsListForPullRequestReviewCommentContentEnum = "eyes"
)


type ReactionsListForPullRequestReviewCommentQueryParams struct {
    Content *ReactionsListForPullRequestReviewCommentContentEnum `queryParam:"style=form,explode=true,name=content"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReactionsListForPullRequestReviewCommentRequest struct {
    PathParams ReactionsListForPullRequestReviewCommentPathParams 
    QueryParams ReactionsListForPullRequestReviewCommentQueryParams 
    
}

type ReactionsListForPullRequestReviewComment415ApplicationJSON struct {
    DocumentationURL string `json:"documentation_url"`
    Message string `json:"message"`
    
}

type ReactionsListForPullRequestReviewCommentResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Reactions []shared.Reaction 
    ReactionsListForPullRequestReviewComment415ApplicationJSONObject *ReactionsListForPullRequestReviewComment415ApplicationJSON 
    
}

