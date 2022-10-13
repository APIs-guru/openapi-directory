package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersMeVideosImportsQueryParams struct {
	Count *int64  `queryParam:"style=form,explode=true,name=count"`
	Sort  *string `queryParam:"style=form,explode=true,name=sort"`
	Start *int64  `queryParam:"style=form,explode=true,name=start"`
}

type GetUsersMeVideosImportsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetUsersMeVideosImportsRequest struct {
	QueryParams GetUsersMeVideosImportsQueryParams
	Security    GetUsersMeVideosImportsSecurity
}

type GetUsersMeVideosImportsResponse struct {
	ContentType      string
	StatusCode       int64
	VideoImportsList *interface{}
}
