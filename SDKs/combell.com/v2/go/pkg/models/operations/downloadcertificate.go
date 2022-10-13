package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadCertificatePathParams struct {
	Sha1Fingerprint string `pathParam:"style=simple,explode=false,name=sha1Fingerprint"`
}

type DownloadCertificateQueryParams struct {
	FileFormat      shared.SslCertificateFileFormatEnum `queryParam:"style=form,explode=true,name=file_format"`
	Password        string                              `queryParam:"style=form,explode=true,name=password"`
	Sha1Fingerprint string                              `queryParam:"style=form,explode=true,name=sha1_fingerprint"`
}

type DownloadCertificateRequest struct {
	PathParams  DownloadCertificatePathParams
	QueryParams DownloadCertificateQueryParams
}

type DownloadCertificateResponse struct {
	ContentType                                       string
	DownloadCertificate200ApplicationJSONBinaryString []byte
	StatusCode                                        int64
}
