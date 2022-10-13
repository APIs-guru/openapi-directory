package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetCommitSignatureProtectionPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetCommitSignatureProtectionRequest struct {
	PathParams ReposGetCommitSignatureProtectionPathParams
}

type ReposGetCommitSignatureProtectionResponse struct {
	ContentType                  string
	StatusCode                   int64
	BasicError                   *shared.BasicError
	ProtectedBranchAdminEnforced *shared.ProtectedBranchAdminEnforced
}
