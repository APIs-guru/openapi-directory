package operations

import (
	"openapi/pkg/models/shared"
)

type BookTranTypesGetResponse struct {
	ContentType               string
	PageResultBookTranTypeDto *shared.PageResultBookTranTypeDto
	StatusCode                int64
}
