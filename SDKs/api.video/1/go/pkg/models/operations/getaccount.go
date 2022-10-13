package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAccountRequest struct {
	Security GetAccountSecurity
}

type GetAccountResponse struct {
	ContentType string
	StatusCode  int64
	Account     *shared.Account
	NotFound    *shared.NotFound
}
