package operations

import (
	"openapi/pkg/models/shared"
)

type AccountPostRequests struct {
	APICoreDtoAccountingUser  *shared.APICoreDtoAccountingUser `request:"mediaType=application/json"`
	APICoreDtoAccountingUser1 *shared.APICoreDtoAccountingUser `request:"mediaType=application/x-www-form-urlencoded"`
	APICoreDtoAccountingUser2 *shared.APICoreDtoAccountingUser `request:"mediaType=text/json"`
	ApplicationXML            []byte                           `request:"mediaType=application/xml"`
	TextXML                   []byte                           `request:"mediaType=text/xml"`
}

type AccountPostRequest struct {
	Request AccountPostRequests
}

type AccountPostResponse struct {
	APICoreDtoAccountingUser *shared.APICoreDtoAccountingUser
	Body                     []byte
	ContentType              string
	StatusCode               int64
}
