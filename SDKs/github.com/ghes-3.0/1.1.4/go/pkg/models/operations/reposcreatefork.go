package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateForkPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateForkRequestBody struct {
	Organization *string `json:"organization"`
}

type ReposCreateForkRequest struct {
	PathParams ReposCreateForkPathParams
	Request    *ReposCreateForkRequestBody `request:"mediaType=application/json"`
}

type ReposCreateForkResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	FullRepository  *shared.FullRepository
	ScimError       *shared.ScimError
	ValidationError *shared.ValidationError
}
