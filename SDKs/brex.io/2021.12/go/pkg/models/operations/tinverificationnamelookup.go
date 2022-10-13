package operations

import (
	"openapi/pkg/models/shared"
)

type TinVerificationNameLookupQueryParams struct {
	Tin string `queryParam:"style=form,explode=true,name=tin"`
}

type TinVerificationNameLookupSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type TinVerificationNameLookupRequest struct {
	QueryParams TinVerificationNameLookupQueryParams
	Security    TinVerificationNameLookupSecurity
}

type TinVerificationNameLookupResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	TinVerificationNameLookup200ApplicationJSONAny     *interface{}
	TinVerificationNameLookupDefaultApplicationJSONAny *interface{}
}
