package operations

import (
	"openapi/pkg/models/shared"
)

type UploadResumableCancelQueryParams struct {
	UploadID string `queryParam:"style=form,explode=true,name=upload_id"`
}

type UploadResumableCancelHeaders struct {
	ContentLength float64 `header:"style=simple,explode=false,name=Content-Length"`
}

type UploadResumableCancelSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UploadResumableCancelRequest struct {
	QueryParams UploadResumableCancelQueryParams
	Headers     UploadResumableCancelHeaders
	Security    UploadResumableCancelSecurity
}

type UploadResumableCancelResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
