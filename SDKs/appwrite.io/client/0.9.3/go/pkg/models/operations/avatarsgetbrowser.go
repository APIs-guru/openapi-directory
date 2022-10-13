package operations

import (
	"openapi/pkg/models/shared"
)

type AvatarsGetBrowserPathParams struct {
	Code string `pathParam:"style=simple,explode=false,name=code"`
}

type AvatarsGetBrowserQueryParams struct {
	Height  *int32 `queryParam:"style=form,explode=true,name=height"`
	Quality *int32 `queryParam:"style=form,explode=true,name=quality"`
	Width   *int32 `queryParam:"style=form,explode=true,name=width"`
}

type AvatarsGetBrowserSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type AvatarsGetBrowserRequest struct {
	PathParams  AvatarsGetBrowserPathParams
	QueryParams AvatarsGetBrowserQueryParams
	Security    AvatarsGetBrowserSecurity
}

type AvatarsGetBrowserResponse struct {
	ContentType string
	StatusCode  int64
}
