package operations

import (
	"openapi/pkg/models/shared"
)

type PostVideosIDCommentsCommentIDPathParams struct {
	CommentID int64       `pathParam:"style=simple,explode=false,name=commentId"`
	ID        interface{} `pathParam:"style=simple,explode=false,name=id"`
}

type PostVideosIDCommentsCommentIDRequestBody struct {
	Text map[string]interface{} `json:"text"`
}

type PostVideosIDCommentsCommentIDSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostVideosIDCommentsCommentIDRequest struct {
	PathParams PostVideosIDCommentsCommentIDPathParams
	Request    *PostVideosIDCommentsCommentIDRequestBody `request:"mediaType=application/json"`
	Security   PostVideosIDCommentsCommentIDSecurity
}

type PostVideosIDCommentsCommentIDResponse struct {
	CommentThreadPostResponse *interface{}
	ContentType               string
	StatusCode                int64
}
