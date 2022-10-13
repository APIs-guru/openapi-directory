package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetBranchProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetBranchProtectionRequest struct {
	PathParams ReposGetBranchProtectionPathParams
}

type ReposGetBranchProtectionResponse struct {
	ContentType      string
	StatusCode       int64
	BasicError       *shared.BasicError
	BranchProtection *shared.BranchProtection
}
