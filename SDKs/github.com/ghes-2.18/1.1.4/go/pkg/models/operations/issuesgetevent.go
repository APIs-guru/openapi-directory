package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesGetEventPathParams struct {
	EventID int64  `pathParam:"style=simple,explode=false,name=event_id"`
	Owner   string `pathParam:"style=simple,explode=false,name=owner"`
	Repo    string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesGetEventRequest struct {
	PathParams IssuesGetEventPathParams
}

type IssuesGetEventResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	IssueEvent  *shared.IssueEvent
}
