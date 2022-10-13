package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListBranchesForHeadCommitPathParams struct {
	CommitSha string `pathParam:"style=simple,explode=false,name=commit_sha"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListBranchesForHeadCommitRequest struct {
	PathParams ReposListBranchesForHeadCommitPathParams
}

type ReposListBranchesForHeadCommit415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReposListBranchesForHeadCommitResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	BranchShorts                                           []shared.BranchShort
	ReposListBranchesForHeadCommit415ApplicationJSONObject *ReposListBranchesForHeadCommit415ApplicationJSON
	ValidationError                                        *shared.ValidationError
}
