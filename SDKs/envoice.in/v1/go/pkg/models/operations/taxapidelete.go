package operations

import (
	"openapi/pkg/models/shared"
)

type TaxAPIDeleteHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type TaxAPIDeleteRequests struct {
	ApplicationXML     []byte                    `request:"mediaType=application/xml"`
	TaxDeleteAPIModel  *shared.TaxDeleteAPIModel `request:"mediaType=application/json"`
	TaxDeleteAPIModel1 *shared.TaxDeleteAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	TaxDeleteAPIModel2 *shared.TaxDeleteAPIModel `request:"mediaType=text/json"`
	TextHTML           []byte                    `request:"mediaType=text/html"`
	TextXML            []byte                    `request:"mediaType=text/xml"`
}

type TaxAPIDeleteRequest struct {
	Headers TaxAPIDeleteHeaders
	Request TaxAPIDeleteRequests
}

type TaxAPIDeleteResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	TaxAPIDelete200ApplicationJSONInt32Integer *int32
	TaxAPIDelete200TextJSONInt32Integer        *int32
}
