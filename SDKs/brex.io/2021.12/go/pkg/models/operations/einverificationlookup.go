package operations

import (
	"openapi/pkg/models/shared"
)

type EinVerificationLookupQueryParams struct {
	Name  string  `queryParam:"style=form,explode=true,name=name"`
	State *string `queryParam:"style=form,explode=true,name=state"`
	Tight *bool   `queryParam:"style=form,explode=true,name=tight"`
	Zip   *string `queryParam:"style=form,explode=true,name=zip"`
}

type EinVerificationLookupSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type EinVerificationLookupRequest struct {
	QueryParams EinVerificationLookupQueryParams
	Security    EinVerificationLookupSecurity
}

type EinVerificationLookupResponse struct {
	ContentType                                    string
	EinVerificationLookup200ApplicationJSONAny     *interface{}
	EinVerificationLookupDefaultApplicationJSONAny *interface{}
	StatusCode                                     int64
}
