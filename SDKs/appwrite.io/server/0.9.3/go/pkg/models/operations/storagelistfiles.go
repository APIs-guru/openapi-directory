package operations

import (
	"openapi/pkg/models/shared"
)

type StorageListFilesQueryParams struct {
	Limit     *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int32  `queryParam:"style=form,explode=true,name=offset"`
	OrderType *string `queryParam:"style=form,explode=true,name=orderType"`
	Search    *string `queryParam:"style=form,explode=true,name=search"`
}

type StorageListFilesSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type StorageListFilesRequest struct {
	QueryParams StorageListFilesQueryParams
	Security    StorageListFilesSecurity
}

type StorageListFilesResponse struct {
	ContentType string
	StatusCode  int64
	FileList    *shared.FileList
}
