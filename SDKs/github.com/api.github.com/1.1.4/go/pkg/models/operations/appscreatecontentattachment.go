package operations

import (
	"openapi/pkg/models/shared"
)

type AppsCreateContentAttachmentPathParams struct {
	ContentReferenceID int64 `pathParam:"style=simple,explode=false,name=content_reference_id"`
}

type AppsCreateContentAttachmentRequestBody struct {
	Body  string `json:"body"`
	Title string `json:"title"`
}

type AppsCreateContentAttachmentRequest struct {
	PathParams AppsCreateContentAttachmentPathParams
	Request    *AppsCreateContentAttachmentRequestBody `request:"mediaType=application/json"`
}

type AppsCreateContentAttachment415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type AppsCreateContentAttachmentResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	AppsCreateContentAttachment415ApplicationJSONObject *AppsCreateContentAttachment415ApplicationJSON
	BasicError                                          *shared.BasicError
	ContentReferenceAttachment                          *shared.ContentReferenceAttachment
	ValidationError                                     *shared.ValidationError
}
