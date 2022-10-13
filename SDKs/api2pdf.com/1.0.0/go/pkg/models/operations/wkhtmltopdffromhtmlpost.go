package operations

import (
	"openapi/pkg/models/shared"
)

type WkhtmltopdfFromHTMLPostRequest struct {
	Request *shared.WkHTMLToPdfHTMLToPdfRequest `request:"mediaType=application/json"`
}

type WkhtmltopdfFromHTMLPostResponse struct {
	APIResponseFailure *shared.APIResponseFailure
	APIResponseSuccess *shared.APIResponseSuccess
	ContentType        string
	StatusCode         int64
}
