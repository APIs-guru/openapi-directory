package operations

import (
	"openapi/pkg/models/shared"
)

type PullsUpdatePathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsUpdateRequestBodyStateEnum string

const (
	PullsUpdateRequestBodyStateEnumOpen   PullsUpdateRequestBodyStateEnum = "open"
	PullsUpdateRequestBodyStateEnumClosed PullsUpdateRequestBodyStateEnum = "closed"
)

type PullsUpdateRequestBody struct {
	Base                *string                          `json:"base"`
	Body                *string                          `json:"body"`
	MaintainerCanModify *bool                            `json:"maintainer_can_modify"`
	State               *PullsUpdateRequestBodyStateEnum `json:"state"`
	Title               *string                          `json:"title"`
}

type PullsUpdateRequest struct {
	PathParams PullsUpdatePathParams
	Request    *PullsUpdateRequestBody `request:"mediaType=application/json"`
}

type PullsUpdateResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	PullRequest     *shared.PullRequest
	ValidationError *shared.ValidationError
}
