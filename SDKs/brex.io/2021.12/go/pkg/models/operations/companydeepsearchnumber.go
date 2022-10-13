package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyDeepsearchNumberPathParams struct {
	Country string `pathParam:"style=simple,explode=false,name=country"`
	Number  string `pathParam:"style=simple,explode=false,name=number"`
}

type CompanyDeepsearchNumberSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyDeepsearchNumberRequest struct {
	PathParams CompanyDeepsearchNumberPathParams
	Security   CompanyDeepsearchNumberSecurity
}

type CompanyDeepsearchNumberResponse struct {
	CompanyDeepsearchNumber200ApplicationJSONAnies   []interface{}
	CompanyDeepsearchNumberDefaultApplicationJSONAny *interface{}
	ContentType                                      string
	StatusCode                                       int64
}
