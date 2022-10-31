package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type IssuesListCommentsPathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesListCommentsQueryParams struct {
	Page    *int64     `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64     `queryParam:"style=form,explode=true,name=per_page"`
	Since   *time.Time `queryParam:"style=form,explode=true,name=since"`
}

type IssuesListCommentsRequest struct {
	PathParams  IssuesListCommentsPathParams
	QueryParams IssuesListCommentsQueryParams
}

type IssuesListCommentsResponse struct {
	ContentType   string
	Headers       map[string][]string
	StatusCode    int64
	BasicError    *shared.BasicError
	IssueComments []shared.IssueComment
}
