package operations

import (
	"openapi/pkg/models/shared"
)

type GistsGetCommentPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	GistID    string `pathParam:"style=simple,explode=false,name=gist_id"`
}

type GistsGetCommentRequest struct {
	PathParams GistsGetCommentPathParams
}

type GistsGetComment403ApplicationJSONBlock struct {
	CreatedAt *string `json:"created_at"`
	HTMLURL   *string `json:"html_url"`
	Reason    *string `json:"reason"`
}

type GistsGetComment403ApplicationJSON struct {
	Block            *GistsGetComment403ApplicationJSONBlock `json:"block"`
	DocumentationURL *string                                 `json:"documentation_url"`
	Message          *string                                 `json:"message"`
}

type GistsGetCommentResponse struct {
	ContentType                             string
	StatusCode                              int64
	BasicError                              *shared.BasicError
	GistComment                             *shared.GistComment
	GistsGetComment403ApplicationJSONObject *GistsGetComment403ApplicationJSON
}
