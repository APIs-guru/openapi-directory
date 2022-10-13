package operations

import (
	"openapi/pkg/models/shared"
)

type GistsUpdatePathParams struct {
	GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
}

type GistsUpdateRequestBodyFiles struct {
	Content  *string `json:"content"`
	Filename *string `json:"filename"`
}

type GistsUpdateRequestBody struct {
	Description *string                                `json:"description"`
	Files       map[string]GistsUpdateRequestBodyFiles `json:"files"`
}

type GistsUpdateRequest struct {
	PathParams GistsUpdatePathParams
	Request    *GistsUpdateRequestBody `request:"mediaType=application/json"`
}

type GistsUpdateResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	GistSimple      *shared.GistSimple
	ValidationError *shared.ValidationError
}
