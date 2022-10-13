package operations

import (
	"openapi/pkg/models/shared"
)

type AvatarsGetCreditCardPathParams struct {
	Code string `pathParam:"style=simple,explode=false,name=code"`
}

type AvatarsGetCreditCardQueryParams struct {
	Height  *int32 `queryParam:"style=form,explode=true,name=height"`
	Quality *int32 `queryParam:"style=form,explode=true,name=quality"`
	Width   *int32 `queryParam:"style=form,explode=true,name=width"`
}

type AvatarsGetCreditCardSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type AvatarsGetCreditCardRequest struct {
	PathParams  AvatarsGetCreditCardPathParams
	QueryParams AvatarsGetCreditCardQueryParams
	Security    AvatarsGetCreditCardSecurity
}

type AvatarsGetCreditCardResponse struct {
	ContentType string
	StatusCode  int64
}
