package operations

import (
	"openapi/pkg/models/shared"
)

type EinVerificationBasicQueryParams struct {
	Ein string `queryParam:"style=form,explode=true,name=ein"`
}

type EinVerificationBasicSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type EinVerificationBasicRequest struct {
	QueryParams EinVerificationBasicQueryParams
	Security    EinVerificationBasicSecurity
}

type EinVerificationBasicResponse struct {
	ContentType                                   string
	EinVerificationBasic200ApplicationJSONAny     *interface{}
	EinVerificationBasicDefaultApplicationJSONAny *interface{}
	StatusCode                                    int64
}
