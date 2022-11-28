package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetBranchPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetBranch415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReposGetBranchRequest struct {
	PathParams ReposGetBranchPathParams
}

type ReposGetBranchResponse struct {
	ContentType                            string
	StatusCode                             int64
	BasicError                             *shared.BasicError
	BranchWithProtection                   *shared.BranchWithProtection
	ReposGetBranch415ApplicationJSONObject *ReposGetBranch415ApplicationJSON
}
