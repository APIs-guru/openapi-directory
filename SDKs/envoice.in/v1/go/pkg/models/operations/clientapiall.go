package operations

import (
	"openapi/pkg/models/shared"
)

type ClientAPIAllHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type ClientAPIAllRequest struct {
	Headers ClientAPIAllHeaders
}

type ClientAPIAllResponse struct {
	Body                   []byte
	ClientDetailsAPIModels []shared.ClientDetailsAPIModel
	ContentType            string
	StatusCode             int64
}
