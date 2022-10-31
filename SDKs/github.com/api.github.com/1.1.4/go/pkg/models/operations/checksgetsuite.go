package operations

import (
	"openapi/pkg/models/shared"
)

type ChecksGetSuitePathParams struct {
	CheckSuiteID int64  `pathParam:"style=simple,explode=false,name=check_suite_id"`
	Owner        string `pathParam:"style=simple,explode=false,name=owner"`
	Repo         string `pathParam:"style=simple,explode=false,name=repo"`
}

type ChecksGetSuiteRequest struct {
	PathParams ChecksGetSuitePathParams
}

type ChecksGetSuiteResponse struct {
	ContentType string
	StatusCode  int64
	CheckSuite  *shared.CheckSuite
}
