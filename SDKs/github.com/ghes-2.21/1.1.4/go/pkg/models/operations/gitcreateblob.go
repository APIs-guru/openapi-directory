package operations

import (
	"openapi/pkg/models/shared"
)

type GitCreateBlobPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type GitCreateBlobRequestBody struct {
	Content  string  `json:"content"`
	Encoding *string `json:"encoding"`
}

type GitCreateBlobRequest struct {
	PathParams GitCreateBlobPathParams
	Request    *GitCreateBlobRequestBody `request:"mediaType=application/json"`
}

type GitCreateBlobResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	ShortBlob       *shared.ShortBlob
	ValidationError *shared.ValidationError
}
