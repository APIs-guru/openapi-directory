package operations

import (
	"openapi/pkg/models/shared"
)

type CompleteOpenIDLoginQueryParams struct {
	Code    string  `queryParam:"style=form,explode=true,name=code"`
	IDToken *string `queryParam:"style=form,explode=true,name=id_token"`
	State   string  `queryParam:"style=form,explode=true,name=state"`
}

type CompleteOpenIDLoginRequest struct {
	QueryParams CompleteOpenIDLoginQueryParams
}

type CompleteOpenIDLoginResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	LoginResponse *shared.LoginResponse
	StatusCode    int64
}
