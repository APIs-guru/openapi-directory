package operations

import (
	"openapi/pkg/models/shared"
)

type ProductAPIDeleteHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type ProductAPIDeleteRequests struct {
	ApplicationXML         []byte                        `request:"mediaType=application/xml"`
	ProductDeleteAPIModel  *shared.ProductDeleteAPIModel `request:"mediaType=application/json"`
	ProductDeleteAPIModel1 *shared.ProductDeleteAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	ProductDeleteAPIModel2 *shared.ProductDeleteAPIModel `request:"mediaType=text/json"`
	TextHTML               []byte                        `request:"mediaType=text/html"`
	TextXML                []byte                        `request:"mediaType=text/xml"`
}

type ProductAPIDeleteRequest struct {
	Headers ProductAPIDeleteHeaders
	Request ProductAPIDeleteRequests
}

type ProductAPIDeleteResponse struct {
	Body                                           []byte
	ContentType                                    string
	ProductAPIDelete200ApplicationJSONInt32Integer *int32
	ProductAPIDelete200TextJSONInt32Integer        *int32
	StatusCode                                     int64
}
