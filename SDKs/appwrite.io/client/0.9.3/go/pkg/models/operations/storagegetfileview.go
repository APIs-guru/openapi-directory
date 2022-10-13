package operations

import (
	"openapi/pkg/models/shared"
)

type StorageGetFileViewPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type StorageGetFileViewSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type StorageGetFileViewRequest struct {
	PathParams StorageGetFileViewPathParams
	Security   StorageGetFileViewSecurity
}

type StorageGetFileViewResponse struct {
	ContentType string
	StatusCode  int64
}
