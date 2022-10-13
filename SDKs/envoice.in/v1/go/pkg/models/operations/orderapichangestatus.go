package operations

import (
	"openapi/pkg/models/shared"
)

type OrderAPIChangeStatusHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type OrderAPIChangeStatusRequests struct {
	ApplicationXML             []byte                            `request:"mediaType=application/xml"`
	ChangeOrderStatusAPIModel  *shared.ChangeOrderStatusAPIModel `request:"mediaType=application/json"`
	ChangeOrderStatusAPIModel1 *shared.ChangeOrderStatusAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	ChangeOrderStatusAPIModel2 *shared.ChangeOrderStatusAPIModel `request:"mediaType=text/json"`
	TextHTML                   []byte                            `request:"mediaType=text/html"`
	TextXML                    []byte                            `request:"mediaType=text/xml"`
}

type OrderAPIChangeStatusRequest struct {
	Headers OrderAPIChangeStatusHeaders
	Request OrderAPIChangeStatusRequests
}

type OrderAPIChangeStatusResponse struct {
	ContentType string
	StatusCode  int64
}
