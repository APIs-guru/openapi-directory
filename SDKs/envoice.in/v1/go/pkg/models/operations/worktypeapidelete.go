package operations

import (
	"openapi/pkg/models/shared"
)

type WorkTypeAPIDeleteHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type WorkTypeAPIDeleteRequests struct {
	ApplicationXML          []byte                         `request:"mediaType=application/xml"`
	TextHTML                []byte                         `request:"mediaType=text/html"`
	TextXML                 []byte                         `request:"mediaType=text/xml"`
	WorkTypeDeleteAPIModel  *shared.WorkTypeDeleteAPIModel `request:"mediaType=application/json"`
	WorkTypeDeleteAPIModel1 *shared.WorkTypeDeleteAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	WorkTypeDeleteAPIModel2 *shared.WorkTypeDeleteAPIModel `request:"mediaType=text/json"`
}

type WorkTypeAPIDeleteRequest struct {
	Headers WorkTypeAPIDeleteHeaders
	Request WorkTypeAPIDeleteRequests
}

type WorkTypeAPIDeleteResponse struct {
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
	WorkTypeAPIDelete200ApplicationJSONInt32Integer *int32
	WorkTypeAPIDelete200TextJSONInt32Integer        *int32
}
