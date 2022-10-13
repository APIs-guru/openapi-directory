package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetRequest struct {
	PathParams ReposGetPathParams
}

type ReposGetResponse struct {
	ContentType    string
	StatusCode     int64
	BasicError     *shared.BasicError
	FullRepository *shared.FullRepository
}
