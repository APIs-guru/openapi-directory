package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetReadmePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetReadmeQueryParams struct {
	Ref *string `queryParam:"style=form,explode=true,name=ref"`
}

type ReposGetReadmeRequest struct {
	PathParams  ReposGetReadmePathParams
	QueryParams ReposGetReadmeQueryParams
}

type ReposGetReadmeResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	ContentFile     *shared.ContentFile
	ValidationError *shared.ValidationError
}
