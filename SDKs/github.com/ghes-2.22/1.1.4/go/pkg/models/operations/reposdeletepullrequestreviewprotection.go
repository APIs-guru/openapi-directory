package operations

import (
	"openapi/pkg/models/shared"
)

type ReposDeletePullRequestReviewProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposDeletePullRequestReviewProtectionRequest struct {
	PathParams ReposDeletePullRequestReviewProtectionPathParams
}

type ReposDeletePullRequestReviewProtectionResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
