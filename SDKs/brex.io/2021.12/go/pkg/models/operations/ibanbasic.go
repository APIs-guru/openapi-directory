package operations

import (
	"openapi/pkg/models/shared"
)

type IbanBasicRequestBody struct {
	IbanNumber string `form:"name=ibanNumber"`
}

type IbanBasicSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type IbanBasicRequest struct {
	Request  IbanBasicRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security IbanBasicSecurity
}

type IbanBasicResponse struct {
	ContentType                        string
	IbanBasic200ApplicationJSONAny     *interface{}
	IbanBasicDefaultApplicationJSONAny *interface{}
	StatusCode                         int64
}
