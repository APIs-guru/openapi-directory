package operations

import (
	"openapi/pkg/models/shared"
)

type VatLookupPathParams struct {
	Country string `pathParam:"style=simple,explode=false,name=country"`
}

type VatLookupRequestBody struct {
	Address *string `form:"name=address"`
	Name    string  `form:"name=name"`
}

type VatLookupSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type VatLookupRequest struct {
	PathParams VatLookupPathParams
	Request    VatLookupRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   VatLookupSecurity
}

type VatLookupResponse struct {
	ContentType                        string
	StatusCode                         int64
	VatLookup200ApplicationJSONAny     *interface{}
	VatLookupDefaultApplicationJSONAny *interface{}
}
