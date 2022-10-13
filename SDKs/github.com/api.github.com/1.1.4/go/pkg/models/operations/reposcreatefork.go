package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateForkPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateForkQueryParams struct {
	Org          *string `queryParam:"style=form,explode=true,name=org"`
	Organization *string `queryParam:"style=form,explode=true,name=organization"`
}

type ReposCreateForkRequestBody struct {
	Organization *string `json:"organization"`
}

type ReposCreateForkRequest struct {
	PathParams  ReposCreateForkPathParams
	QueryParams ReposCreateForkQueryParams
	Request     *ReposCreateForkRequestBody `request:"mediaType=application/json"`
}

type ReposCreateForkResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	Repository      *shared.Repository
	ScimError       *shared.ScimError
	ValidationError *shared.ValidationError
}
