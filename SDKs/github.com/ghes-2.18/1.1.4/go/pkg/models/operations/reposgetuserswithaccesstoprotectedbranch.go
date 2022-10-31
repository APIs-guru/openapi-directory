package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetUsersWithAccessToProtectedBranchPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetUsersWithAccessToProtectedBranchRequest struct {
	PathParams ReposGetUsersWithAccessToProtectedBranchPathParams
}

type ReposGetUsersWithAccessToProtectedBranchResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	SimpleUsers []shared.SimpleUser
}
