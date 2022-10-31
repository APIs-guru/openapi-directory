package operations

import (
	"openapi/pkg/models/shared"
)

type TaxAPIUpdateHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type TaxAPIUpdateRequests struct {
	ApplicationXML     []byte                    `request:"mediaType=application/xml"`
	TaxUpdateAPIModel  *shared.TaxUpdateAPIModel `request:"mediaType=application/json"`
	TaxUpdateAPIModel1 *shared.TaxUpdateAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	TaxUpdateAPIModel2 *shared.TaxUpdateAPIModel `request:"mediaType=text/json"`
	TextHTML           []byte                    `request:"mediaType=text/html"`
	TextXML            []byte                    `request:"mediaType=text/xml"`
}

type TaxAPIUpdateRequest struct {
	Headers TaxAPIUpdateHeaders
	Request TaxAPIUpdateRequests
}

type TaxAPIUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
