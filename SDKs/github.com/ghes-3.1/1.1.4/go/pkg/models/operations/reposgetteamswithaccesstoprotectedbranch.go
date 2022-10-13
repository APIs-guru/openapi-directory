package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetTeamsWithAccessToProtectedBranchPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetTeamsWithAccessToProtectedBranchRequest struct {
	PathParams ReposGetTeamsWithAccessToProtectedBranchPathParams
}

type ReposGetTeamsWithAccessToProtectedBranchResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	Teams       []shared.Team
}
