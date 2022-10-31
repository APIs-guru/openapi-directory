package operations

import (
	"openapi/pkg/models/shared"
)

type ChromeFromURLPostRequest struct {
	Request *shared.ChromeURLToPdfRequest `request:"mediaType=application/json"`
}

type ChromeFromURLPostResponse struct {
	APIResponseFailure *shared.APIResponseFailure
	APIResponseSuccess *shared.APIResponseSuccess
	ContentType        string
	StatusCode         int64
}
