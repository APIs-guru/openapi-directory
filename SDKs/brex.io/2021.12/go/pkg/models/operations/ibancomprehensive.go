package operations

import (
	"openapi/pkg/models/shared"
)

type IbanComprehensiveRequestBody struct {
	IbanNumber string `form:"name=ibanNumber"`
}

type IbanComprehensiveSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type IbanComprehensiveRequest struct {
	Request  IbanComprehensiveRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security IbanComprehensiveSecurity
}

type IbanComprehensiveResponse struct {
	ContentType                                                                       string
	IbanComprehensiveDefaultApplicationJSONAny                                        *interface{}
	StatusCode                                                                        int64
	Oneapi1v11ibanVerification1checkIbanPostResponses200ContentApplication1jsonSchema *interface{}
}
