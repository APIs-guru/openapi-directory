package operations

import (
	"openapi/pkg/models/shared"
)

type VatComprehensivePathParams struct {
	Country string `pathParam:"style=simple,explode=false,name=country"`
}

type VatComprehensiveRequestBody struct {
	CompanyAddress *string `form:"name=companyAddress"`
	CompanyName    *string `form:"name=companyName"`
	CompanyNumber  *string `form:"name=companyNumber"`
	VatNumber      string  `form:"name=vatNumber"`
}

type VatComprehensiveSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type VatComprehensiveRequest struct {
	PathParams VatComprehensivePathParams
	Request    VatComprehensiveRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   VatComprehensiveSecurity
}

type VatComprehensiveResponse struct {
	ContentType                               string
	StatusCode                                int64
	VatComprehensive200ApplicationJSONAny     *interface{}
	VatComprehensiveDefaultApplicationJSONAny *interface{}
}
