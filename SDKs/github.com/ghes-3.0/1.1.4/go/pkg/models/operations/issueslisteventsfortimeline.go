package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesListEventsForTimelinePathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesListEventsForTimelineQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type IssuesListEventsForTimelineRequest struct {
	PathParams  IssuesListEventsForTimelinePathParams
	QueryParams IssuesListEventsForTimelineQueryParams
}

type IssuesListEventsForTimeline415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type IssuesListEventsForTimelineResponse struct {
	ContentType                                         string
	Headers                                             map[string][]string
	StatusCode                                          int64
	BasicError                                          *shared.BasicError
	IssueEventForIssues                                 []shared.IssueEventForIssue
	IssuesListEventsForTimeline415ApplicationJSONObject *IssuesListEventsForTimeline415ApplicationJSON
}
