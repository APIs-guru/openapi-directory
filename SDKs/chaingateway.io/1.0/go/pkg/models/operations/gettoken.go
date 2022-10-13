package operations

import (
	"openapi/pkg/models/shared"
)

type GetTokenHeaders struct {
	Authorization string `header:"style=simple,explode=true,name=Authorization"`
}

type GetTokenRequest struct {
	Headers GetTokenHeaders
	Request shared.GetTokenRequest `request:"mediaType=application/json"`
}

type GetTokenResponse struct {
	ContentType string
	StatusCode  int64
	GetToken    *shared.GetToken
}
