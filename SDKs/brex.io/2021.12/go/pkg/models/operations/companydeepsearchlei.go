package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyDeepsearchLeiPathParams struct {
	Number string `pathParam:"style=simple,explode=false,name=number"`
}

type CompanyDeepsearchLeiQueryParams struct {
	Page *int32 `queryParam:"style=form,explode=true,name=page"`
}

type CompanyDeepsearchLeiSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyDeepsearchLeiRequest struct {
	PathParams  CompanyDeepsearchLeiPathParams
	QueryParams CompanyDeepsearchLeiQueryParams
	Security    CompanyDeepsearchLeiSecurity
}

type CompanyDeepsearchLeiResponse struct {
	CompanyDeepsearchLei200ApplicationJSONAny     *interface{}
	CompanyDeepsearchLeiDefaultApplicationJSONAny *interface{}
	ContentType                                   string
	StatusCode                                    int64
}
