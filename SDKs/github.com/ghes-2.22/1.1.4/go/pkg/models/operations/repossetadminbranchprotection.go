package operations

import (
	"openapi/pkg/models/shared"
)

type ReposSetAdminBranchProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposSetAdminBranchProtectionRequest struct {
	PathParams ReposSetAdminBranchProtectionPathParams
}

type ReposSetAdminBranchProtectionResponse struct {
	ContentType                  string
	StatusCode                   int64
	ProtectedBranchAdminEnforced *shared.ProtectedBranchAdminEnforced
}
