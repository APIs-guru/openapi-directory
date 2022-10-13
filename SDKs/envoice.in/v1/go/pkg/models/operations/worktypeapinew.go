package operations

import (
	"openapi/pkg/models/shared"
)

type WorkTypeAPINewHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type WorkTypeAPINewRequests struct {
	ApplicationXML          []byte                         `request:"mediaType=application/xml"`
	TextHTML                []byte                         `request:"mediaType=text/html"`
	TextXML                 []byte                         `request:"mediaType=text/xml"`
	WorkTypeCreateAPIModel  *shared.WorkTypeCreateAPIModel `request:"mediaType=application/json"`
	WorkTypeCreateAPIModel1 *shared.WorkTypeCreateAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	WorkTypeCreateAPIModel2 *shared.WorkTypeCreateAPIModel `request:"mediaType=text/json"`
}

type WorkTypeAPINewRequest struct {
	Headers WorkTypeAPINewHeaders
	Request WorkTypeAPINewRequests
}

type WorkTypeAPINewResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	WorkTypeAPINew200ApplicationJSONInt32Integer *int32
	WorkTypeAPINew200TextJSONInt32Integer        *int32
}
