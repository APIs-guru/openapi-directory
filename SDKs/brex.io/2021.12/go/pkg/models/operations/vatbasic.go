package operations

import (
	"openapi/pkg/models/shared"
)

type VatBasicPathParams struct {
	Country string `pathParam:"style=simple,explode=false,name=country"`
}

type VatBasicRequestBody struct {
	CompanyAddress *string `form:"name=companyAddress"`
	CompanyName    *string `form:"name=companyName"`
	CompanyNumber  *string `form:"name=companyNumber"`
	VatNumber      string  `form:"name=vatNumber"`
}

type VatBasicSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type VatBasicRequest struct {
	PathParams VatBasicPathParams
	Request    VatBasicRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   VatBasicSecurity
}

type VatBasicResponse struct {
	ContentType                       string
	StatusCode                        int64
	VatBasic200ApplicationJSONAny     *interface{}
	VatBasicDefaultApplicationJSONAny *interface{}
}
