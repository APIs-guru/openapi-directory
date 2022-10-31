package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetContentPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Path  string `pathParam:"style=simple,explode=false,name=path"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetContentQueryParams struct {
	Ref *string `queryParam:"style=form,explode=true,name=ref"`
}

type ReposGetContentRequest struct {
	PathParams  ReposGetContentPathParams
	QueryParams ReposGetContentQueryParams
}

type ReposGetContentResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	BasicError                             *shared.BasicError
	ReposGetContent200ApplicationJSONOneOf *interface{}
}
