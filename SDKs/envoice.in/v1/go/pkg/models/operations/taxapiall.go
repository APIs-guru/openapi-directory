package operations

import (
	"openapi/pkg/models/shared"
)

type TaxAPIAllHeaders struct {
	XAuthKey    string `header:"name=x-auth-key"`
	XAuthSecret string `header:"name=x-auth-secret"`
}

type TaxAPIAllRequest struct {
	Headers TaxAPIAllHeaders
}

type TaxAPIAllResponse struct {
	Body                []byte
	ContentType         string
	StatusCode          int64
	TaxDetailsAPIModels []shared.TaxDetailsAPIModel
}
