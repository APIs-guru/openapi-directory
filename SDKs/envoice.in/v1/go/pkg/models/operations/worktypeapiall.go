package operations

import (
	"openapi/pkg/models/shared"
)

type WorkTypeAPIAllHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type WorkTypeAPIAllRequest struct {
	Headers WorkTypeAPIAllHeaders
}

type WorkTypeAPIAllResponse struct {
	Body                     []byte
	ContentType              string
	StatusCode               int64
	WorkTypeDetailsAPIModels []shared.WorkTypeDetailsAPIModel
}
