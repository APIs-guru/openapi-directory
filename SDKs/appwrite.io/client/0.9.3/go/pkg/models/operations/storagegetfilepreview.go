package operations

import (
	"openapi/pkg/models/shared"
)

type StorageGetFilePreviewPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type StorageGetFilePreviewQueryParams struct {
	Background   *string  `queryParam:"style=form,explode=true,name=background"`
	BorderColor  *string  `queryParam:"style=form,explode=true,name=borderColor"`
	BorderRadius *int32   `queryParam:"style=form,explode=true,name=borderRadius"`
	BorderWidth  *int32   `queryParam:"style=form,explode=true,name=borderWidth"`
	Gravity      *string  `queryParam:"style=form,explode=true,name=gravity"`
	Height       *int32   `queryParam:"style=form,explode=true,name=height"`
	Opacity      *float32 `queryParam:"style=form,explode=true,name=opacity"`
	Output       *string  `queryParam:"style=form,explode=true,name=output"`
	Quality      *int32   `queryParam:"style=form,explode=true,name=quality"`
	Rotation     *int32   `queryParam:"style=form,explode=true,name=rotation"`
	Width        *int32   `queryParam:"style=form,explode=true,name=width"`
}

type StorageGetFilePreviewSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type StorageGetFilePreviewRequest struct {
	PathParams  StorageGetFilePreviewPathParams
	QueryParams StorageGetFilePreviewQueryParams
	Security    StorageGetFilePreviewSecurity
}

type StorageGetFilePreviewResponse struct {
	ContentType string
	StatusCode  int64
}
