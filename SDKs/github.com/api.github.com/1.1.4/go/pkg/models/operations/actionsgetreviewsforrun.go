package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetReviewsForRunPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	RunID int64  `pathParam:"style=simple,explode=false,name=run_id"`
}

type ActionsGetReviewsForRunRequest struct {
	PathParams ActionsGetReviewsForRunPathParams
}

type ActionsGetReviewsForRunResponse struct {
	ContentType          string
	StatusCode           int64
	EnvironmentApprovals []shared.EnvironmentApprovals
}
