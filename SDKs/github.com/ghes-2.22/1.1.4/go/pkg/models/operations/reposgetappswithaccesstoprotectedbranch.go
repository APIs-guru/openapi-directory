package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetAppsWithAccessToProtectedBranchPathParams struct {
	Branch string `pathParam:"style=simple,explode=false,name=branch"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetAppsWithAccessToProtectedBranchRequest struct {
	PathParams ReposGetAppsWithAccessToProtectedBranchPathParams
}

type ReposGetAppsWithAccessToProtectedBranchResponse struct {
	ContentType  string
	StatusCode   int64
	BasicError   *shared.BasicError
	Integrations []map[string]interface{}
}
