package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentResourcePathParams struct {
	DocumentID string `pathParam:"style=simple,explode=false,name=document_id"`
}

type GetDocumentResourceHeaders struct {
	XFields *string `header:"style=simple,explode=false,name=X-Fields"`
}

type GetDocumentResourceRequest struct {
	PathParams GetDocumentResourcePathParams
	Headers    GetDocumentResourceHeaders
}

type GetDocumentResourceResponse struct {
	ContentType      string
	DocumentModelGet *shared.DocumentModelGet
	StatusCode       int64
}
