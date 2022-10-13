package operations

import (
	"openapi/pkg/models/shared"
)

type StorageDeleteFilePathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type StorageDeleteFileSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type StorageDeleteFileRequest struct {
	PathParams StorageDeleteFilePathParams
	Security   StorageDeleteFileSecurity
}

type StorageDeleteFileResponse struct {
	ContentType string
	StatusCode  int64
}
