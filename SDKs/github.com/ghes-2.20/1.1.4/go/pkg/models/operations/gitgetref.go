package operations

import (
	"openapi/pkg/models/shared"
)

type GitGetRefPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Ref   string `pathParam:"style=simple,explode=false,name=ref"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type GitGetRefRequest struct {
	PathParams GitGetRefPathParams
}

type GitGetRefResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	GitRef      *shared.GitRef
}
