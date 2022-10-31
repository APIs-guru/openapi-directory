package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetReadmeFromAltPathPathParams struct {
	Dir   string `pathParam:"style=simple,explode=false,name=dir"`
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetReadmeFromAltPathQueryParams struct {
	Ref *string `queryParam:"style=form,explode=true,name=ref"`
}

type ReposGetReadmeFromAltPathRequest struct {
	PathParams  ReposGetReadmeFromAltPathPathParams
	QueryParams ReposGetReadmeFromAltPathQueryParams
}

type ReposGetReadmeFromAltPathResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	ContentFile     *shared.ContentFile
	ValidationError *shared.ValidationError
}
