package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetAccessRestrictionsPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetAccessRestrictionsRequest struct {
	PathParams ReposGetAccessRestrictionsPathParams
}

type ReposGetAccessRestrictionsResponse struct {
	ContentType             string
	StatusCode              int64
	BasicError              *shared.BasicError
	BranchRestrictionPolicy *shared.BranchRestrictionPolicy
}
