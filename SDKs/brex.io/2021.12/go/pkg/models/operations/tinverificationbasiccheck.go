package operations

import (
	"openapi/pkg/models/shared"
)

type TinVerificationBasicCheckQueryParams struct {
	Name string `queryParam:"style=form,explode=true,name=name"`
	Tin  string `queryParam:"style=form,explode=true,name=tin"`
}

type TinVerificationBasicCheckSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type TinVerificationBasicCheckRequest struct {
	QueryParams TinVerificationBasicCheckQueryParams
	Security    TinVerificationBasicCheckSecurity
}

type TinVerificationBasicCheckResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	TinVerificationBasicCheck200ApplicationJSONAny     *interface{}
	TinVerificationBasicCheckDefaultApplicationJSONAny *interface{}
}
