package operations

import (
	"openapi/pkg/models/shared"
)

type GistsForkPathParams struct {
	GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
}

type GistsForkRequest struct {
	PathParams GistsForkPathParams
}

type GistsForkResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BaseGist        *shared.BaseGist
	BasicError      *shared.BasicError
	ValidationError *shared.ValidationError
}
