package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadZipArchiveHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type DownloadZipArchiveRequest struct {
	Headers DownloadZipArchiveHeaders
	Request shared.ZipDownloadRequest `request:"mediaType=application/json"`
}

type DownloadZipArchiveResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
