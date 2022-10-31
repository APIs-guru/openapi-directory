package operations

import (
	"openapi/pkg/models/shared"
)

type ReposDeleteBranchProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposDeleteBranchProtectionRequest struct {
	PathParams ReposDeleteBranchProtectionPathParams
}

type ReposDeleteBranchProtectionResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
