package operations

import (
	"openapi/pkg/models/shared"
)

type ProductOrderUboRequestBody struct {
	CallbackURL *string  `form:"name=callbackUrl"`
	Credits     *float64 `form:"name=credits"`
	IncludeDocs *bool    `form:"name=includeDocs"`
	Levels      *string  `form:"name=levels"`
	Strategy    *string  `form:"name=strategy"`
	SubjectID   string   `form:"name=subjectId"`
}

type ProductOrderUboSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type ProductOrderUboRequest struct {
	Request  *ProductOrderUboRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security ProductOrderUboSecurity
}

type ProductOrderUboResponse struct {
	ContentType                              string
	ProductOrderUbo200ApplicationJSONAny     *interface{}
	ProductOrderUboDefaultApplicationJSONAny *interface{}
	StatusCode                               int64
}
