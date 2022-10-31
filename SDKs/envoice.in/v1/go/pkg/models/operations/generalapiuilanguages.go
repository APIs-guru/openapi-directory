package operations

import (
	"openapi/pkg/models/shared"
)

type GeneralAPIUILanguagesHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type GeneralAPIUILanguagesRequest struct {
	Headers GeneralAPIUILanguagesHeaders
}

type GeneralAPIUILanguagesResponse struct {
	Body                       []byte
	ContentType                string
	StatusCode                 int64
	UILanguageDetailsAPIModels []shared.UILanguageDetailsAPIModel
}
