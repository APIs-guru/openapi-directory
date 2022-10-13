package operations

import (
	"openapi/pkg/models/shared"
)

type CompanySearchNamePathParams struct {
	Country string `pathParam:"style=simple,explode=false,name=country"`
	Name    string `pathParam:"style=simple,explode=false,name=name"`
}

type CompanySearchNameQueryParams struct {
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
}

type CompanySearchNameSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanySearchNameRequest struct {
	PathParams  CompanySearchNamePathParams
	QueryParams CompanySearchNameQueryParams
	Security    CompanySearchNameSecurity
}

type CompanySearchNameResponse struct {
	CompanySearchName200ApplicationJSONAnies   []interface{}
	CompanySearchNameDefaultApplicationJSONAny *interface{}
	ContentType                                string
	StatusCode                                 int64
}
