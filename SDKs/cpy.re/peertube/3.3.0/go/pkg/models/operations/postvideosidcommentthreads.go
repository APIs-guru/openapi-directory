package operations

import (
	"openapi/pkg/models/shared"
)

type PostVideosIDCommentThreadsPathParams struct {
	ID interface{} `pathParam:"style=simple,explode=false,name=id"`
}

type PostVideosIDCommentThreadsRequestBody struct {
	Text map[string]interface{} `json:"text"`
}

type PostVideosIDCommentThreadsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostVideosIDCommentThreadsRequest struct {
	PathParams PostVideosIDCommentThreadsPathParams
	Request    *PostVideosIDCommentThreadsRequestBody `request:"mediaType=application/json"`
	Security   PostVideosIDCommentThreadsSecurity
}

type PostVideosIDCommentThreadsResponse struct {
	CommentThreadPostResponse *interface{}
	ContentType               string
	StatusCode                int64
}
