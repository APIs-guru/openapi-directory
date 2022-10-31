package operations

import (
	"openapi/pkg/models/shared"
)

type EstimationAPIChangeStatusHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type EstimationAPIChangeStatusRequests struct {
	ApplicationXML                  []byte                                 `request:"mediaType=application/xml"`
	EstimationChangeStatusAPIModel  *shared.EstimationChangeStatusAPIModel `request:"mediaType=application/json"`
	EstimationChangeStatusAPIModel1 *shared.EstimationChangeStatusAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	EstimationChangeStatusAPIModel2 *shared.EstimationChangeStatusAPIModel `request:"mediaType=text/json"`
	TextHTML                        []byte                                 `request:"mediaType=text/html"`
	TextXML                         []byte                                 `request:"mediaType=text/xml"`
}

type EstimationAPIChangeStatusRequest struct {
	Headers EstimationAPIChangeStatusHeaders
	Request EstimationAPIChangeStatusRequests
}

type EstimationAPIChangeStatusResponse struct {
	Body                                               []byte
	ContentType                                        string
	EstimationAPIChangeStatus200ApplicationJSONBoolean *bool
	EstimationAPIChangeStatus200TextJSONBoolean        *bool
	StatusCode                                         int64
}
