package operations

import (
	"openapi/pkg/models/shared"
)

type CategoryTypesGetResponse struct {
	ContentType               string
	PageResultCategoryTypeDto *shared.PageResultCategoryTypeDto
	StatusCode                int64
}
