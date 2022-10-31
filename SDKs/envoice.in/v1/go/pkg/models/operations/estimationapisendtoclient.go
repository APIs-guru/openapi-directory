package operations

import (
	"openapi/pkg/models/shared"
)

type EstimationAPISendToClientHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type EstimationAPISendToClientRequests struct {
	ApplicationXML                  []byte                                 `request:"mediaType=application/xml"`
	SendEstimationToClientAPIModel  *shared.SendEstimationToClientAPIModel `request:"mediaType=application/json"`
	SendEstimationToClientAPIModel1 *shared.SendEstimationToClientAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	SendEstimationToClientAPIModel2 *shared.SendEstimationToClientAPIModel `request:"mediaType=text/json"`
	TextHTML                        []byte                                 `request:"mediaType=text/html"`
	TextXML                         []byte                                 `request:"mediaType=text/xml"`
}

type EstimationAPISendToClientRequest struct {
	Headers EstimationAPISendToClientHeaders
	Request EstimationAPISendToClientRequests
}

type EstimationAPISendToClientResponse struct {
	Body                                                    []byte
	ContentType                                             string
	EstimationAPISendToClient200ApplicationJSONInt32Integer *int32
	EstimationAPISendToClient200TextJSONInt32Integer        *int32
	StatusCode                                              int64
}
