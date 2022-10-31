package operations

import (
	"openapi/pkg/models/shared"
)

type BankAccountsGetResponse struct {
	ContentType                   string
	PageResultBankAccountQueryDto *shared.PageResultBankAccountQueryDto
	StatusCode                    int64
}
