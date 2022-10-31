package operations

import (
	"openapi/pkg/models/shared"
)

type OrderAPIDeleteHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type OrderAPIDeleteRequests struct {
	ApplicationXML       []byte                      `request:"mediaType=application/xml"`
	OrderDeleteAPIModel  *shared.OrderDeleteAPIModel `request:"mediaType=application/json"`
	OrderDeleteAPIModel1 *shared.OrderDeleteAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	OrderDeleteAPIModel2 *shared.OrderDeleteAPIModel `request:"mediaType=text/json"`
	TextHTML             []byte                      `request:"mediaType=text/html"`
	TextXML              []byte                      `request:"mediaType=text/xml"`
}

type OrderAPIDeleteRequest struct {
	Headers OrderAPIDeleteHeaders
	Request OrderAPIDeleteRequests
}

type OrderAPIDeleteResponse struct {
	Body                                         []byte
	ContentType                                  string
	OrderAPIDelete200ApplicationJSONInt32Integer *int32
	OrderAPIDelete200TextJSONInt32Integer        *int32
	StatusCode                                   int64
}
