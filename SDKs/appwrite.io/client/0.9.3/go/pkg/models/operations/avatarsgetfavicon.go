package operations

import (
	"openapi/pkg/models/shared"
)

type AvatarsGetFaviconQueryParams struct {
	URL string `queryParam:"style=form,explode=true,name=url"`
}

type AvatarsGetFaviconSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type AvatarsGetFaviconRequest struct {
	QueryParams AvatarsGetFaviconQueryParams
	Security    AvatarsGetFaviconSecurity
}

type AvatarsGetFaviconResponse struct {
	ContentType string
	StatusCode  int64
}
