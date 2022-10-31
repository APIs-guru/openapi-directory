package operations

import (
	"openapi/pkg/models/shared"
)

type EstimationAPIDeleteHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type EstimationAPIDeleteRequests struct {
	ApplicationXML            []byte                           `request:"mediaType=application/xml"`
	EstimationDeleteAPIModel  *shared.EstimationDeleteAPIModel `request:"mediaType=application/json"`
	EstimationDeleteAPIModel1 *shared.EstimationDeleteAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	EstimationDeleteAPIModel2 *shared.EstimationDeleteAPIModel `request:"mediaType=text/json"`
	TextHTML                  []byte                           `request:"mediaType=text/html"`
	TextXML                   []byte                           `request:"mediaType=text/xml"`
}

type EstimationAPIDeleteRequest struct {
	Headers EstimationAPIDeleteHeaders
	Request EstimationAPIDeleteRequests
}

type EstimationAPIDeleteResponse struct {
	Body                                              []byte
	ContentType                                       string
	EstimationAPIDelete200ApplicationJSONInt32Integer *int32
	EstimationAPIDelete200TextJSONInt32Integer        *int32
	StatusCode                                        int64
}
