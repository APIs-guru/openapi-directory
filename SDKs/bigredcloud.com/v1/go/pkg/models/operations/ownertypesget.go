package operations

import (
	"openapi/pkg/models/shared"
)

type OwnerTypesGetResponse struct {
	ContentType            string
	PageResultOwnerTypeDto *shared.PageResultOwnerTypeDto
	StatusCode             int64
}
