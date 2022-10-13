package operations

import (
	"openapi/pkg/models/shared"
)

type ReposRenameBranchPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposRenameBranchRequestBody struct {
	NewName string `json:"new_name"`
}

type ReposRenameBranchRequest struct {
	PathParams ReposRenameBranchPathParams
	Request    *ReposRenameBranchRequestBody `request:"mediaType=application/json"`
}

type ReposRenameBranchResponse struct {
	ContentType          string
	StatusCode           int64
	BasicError           *shared.BasicError
	BranchWithProtection *shared.BranchWithProtection
	ValidationError      *shared.ValidationError
}
