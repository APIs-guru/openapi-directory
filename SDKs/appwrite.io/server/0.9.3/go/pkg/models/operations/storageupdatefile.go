package operations

import (
	"openapi/pkg/models/shared"
)

type StorageUpdateFilePathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type StorageUpdateFileRequestBody struct {
	Read  []string `json:"read"`
	Write []string `json:"write"`
}

type StorageUpdateFileSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type StorageUpdateFileRequest struct {
	PathParams StorageUpdateFilePathParams
	Request    *StorageUpdateFileRequestBody `request:"mediaType=application/json"`
	Security   StorageUpdateFileSecurity
}

type StorageUpdateFileResponse struct {
	ContentType string
	StatusCode  int64
	File        *shared.File
}
