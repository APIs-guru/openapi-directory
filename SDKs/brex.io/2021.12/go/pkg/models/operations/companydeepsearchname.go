package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyDeepsearchNamePathParams struct {
	Country string `pathParam:"style=simple,explode=false,name=country"`
	Name    string `pathParam:"style=simple,explode=false,name=name"`
}

type CompanyDeepsearchNameSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyDeepsearchNameRequest struct {
	PathParams CompanyDeepsearchNamePathParams
	Security   CompanyDeepsearchNameSecurity
}

type CompanyDeepsearchNameResponse struct {
	CompanyDeepsearchName200ApplicationJSONAnies   []interface{}
	CompanyDeepsearchNameDefaultApplicationJSONAny *interface{}
	ContentType                                    string
	StatusCode                                     int64
}
