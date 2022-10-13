package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyAlternativeSearchPathParams struct {
	Country string `pathParam:"style=simple,explode=false,name=country"`
}

type CompanyAlternativeSearchRequestBody struct {
	Address *string `form:"name=address"`
	Name    *string `form:"name=name"`
	Number  *string `form:"name=number"`
	Phone   *string `form:"name=phone"`
	URL     *string `form:"name=url"`
	Vat     *string `form:"name=vat"`
}

type CompanyAlternativeSearchSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyAlternativeSearchRequest struct {
	PathParams CompanyAlternativeSearchPathParams
	Request    *CompanyAlternativeSearchRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CompanyAlternativeSearchSecurity
}

type CompanyAlternativeSearchResponse struct {
	CompanyAlternativeSearch200ApplicationJSONAnies   []interface{}
	CompanyAlternativeSearchDefaultApplicationJSONAny *interface{}
	ContentType                                       string
	StatusCode                                        int64
}
