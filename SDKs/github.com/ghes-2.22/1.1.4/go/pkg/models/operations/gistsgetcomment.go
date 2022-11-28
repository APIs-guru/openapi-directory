package operations

import (
	"openapi/pkg/models/shared"
)

type GistsGetCommentPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	GistID    string `pathParam:"style=simple,explode=false,name=gist_id"`
}

type GistsGetComment403ApplicationJSONBlock struct {
	CreatedAt *string `json:"created_at,omitempty"`
	HTMLURL   *string `json:"html_url,omitempty"`
	Reason    *string `json:"reason,omitempty"`
}

type GistsGetComment403ApplicationJSON struct {
	Block            *GistsGetComment403ApplicationJSONBlock `json:"block,omitempty"`
	DocumentationURL *string                                 `json:"documentation_url,omitempty"`
	Message          *string                                 `json:"message,omitempty"`
}

type GistsGetCommentRequest struct {
	PathParams GistsGetCommentPathParams
}

type GistsGetCommentResponse struct {
	ContentType                             string
	StatusCode                              int64
	BasicError                              *shared.BasicError
	GistComment                             *shared.GistComment
	GistsGetComment403ApplicationJSONObject *GistsGetComment403ApplicationJSON
}
