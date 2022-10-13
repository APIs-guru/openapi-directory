package operations

import (
	"openapi/pkg/models/shared"
)

type ChecksGetPathParams struct {
	CheckRunID int64  `pathParam:"style=simple,explode=false,name=check_run_id"`
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type ChecksGetRequest struct {
	PathParams ChecksGetPathParams
}

type ChecksGetResponse struct {
	ContentType string
	StatusCode  int64
	CheckRun    *shared.CheckRun
}
