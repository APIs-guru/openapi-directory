package operations

import (
	"openapi/pkg/models/shared"
)

type PullsCreatePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsCreateRequestBody struct {
	Base                string  `json:"base"`
	Body                *string `json:"body"`
	Draft               *bool   `json:"draft"`
	Head                string  `json:"head"`
	Issue               *int64  `json:"issue"`
	MaintainerCanModify *bool   `json:"maintainer_can_modify"`
	Title               *string `json:"title"`
}

type PullsCreateRequest struct {
	PathParams PullsCreatePathParams
	Request    *PullsCreateRequestBody `request:"mediaType=application/json"`
}

type PullsCreateResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	PullRequest     *shared.PullRequest
	ValidationError *shared.ValidationError
}
