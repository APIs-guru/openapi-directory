package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetAdminBranchProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetAdminBranchProtectionRequest struct {
	PathParams ReposGetAdminBranchProtectionPathParams
}

type ReposGetAdminBranchProtectionResponse struct {
	ContentType                  string
	StatusCode                   int64
	ProtectedBranchAdminEnforced *shared.ProtectedBranchAdminEnforced
}
