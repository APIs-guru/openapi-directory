package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideosIDCommentsCommentIDPathParams struct {
	CommentID int64       `pathParam:"style=simple,explode=false,name=commentId"`
	ID        interface{} `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteVideosIDCommentsCommentIDSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteVideosIDCommentsCommentIDRequest struct {
	PathParams DeleteVideosIDCommentsCommentIDPathParams
	Security   DeleteVideosIDCommentsCommentIDSecurity
}

type DeleteVideosIDCommentsCommentIDResponse struct {
	ContentType string
	StatusCode  int64
}
