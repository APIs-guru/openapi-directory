package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersResponse struct {
	ContentType  string
	StatusCode   int64
	InvalidToken *shared.InvalidToken
	UserRecords  []shared.UserRecord
}
