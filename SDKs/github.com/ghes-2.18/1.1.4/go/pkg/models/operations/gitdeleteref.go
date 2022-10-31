package operations

import (
	"openapi/pkg/models/shared"
)

type GitDeleteRefPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Ref   string `pathParam:"style=simple,explode=false,name=ref"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type GitDeleteRefRequest struct {
	PathParams GitDeleteRefPathParams
}

type GitDeleteRefResponse struct {
	ContentType     string
	StatusCode      int64
	ValidationError *shared.ValidationError
}
