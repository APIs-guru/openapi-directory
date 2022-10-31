package operations

import (
	"openapi/pkg/models/shared"
)

type ReposDeleteAdminBranchProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposDeleteAdminBranchProtectionRequest struct {
	PathParams ReposDeleteAdminBranchProtectionPathParams
}

type ReposDeleteAdminBranchProtectionResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
