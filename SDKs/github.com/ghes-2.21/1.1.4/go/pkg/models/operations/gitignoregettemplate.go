package operations

import (
	"openapi/pkg/models/shared"
)

type GitignoreGetTemplatePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GitignoreGetTemplateRequest struct {
	PathParams GitignoreGetTemplatePathParams
}

type GitignoreGetTemplateResponse struct {
	ContentType       string
	StatusCode        int64
	GitignoreTemplate *shared.GitignoreTemplate
}
