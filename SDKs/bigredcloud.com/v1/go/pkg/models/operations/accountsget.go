package operations

import (
	"openapi/pkg/models/shared"
)

type AccountsGetResponse struct {
	ContentType          string
	PageResultAccountDto *shared.PageResultAccountDto
	StatusCode           int64
}
