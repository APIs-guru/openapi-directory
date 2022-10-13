package operations

import (
	"openapi/pkg/models/shared"
)

type SalesEntriesGetResponse struct {
	ContentType                  string
	PageResultSalesEntryQueryDto *shared.PageResultSalesEntryQueryDto
	StatusCode                   int64
}
