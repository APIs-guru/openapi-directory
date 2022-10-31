package operations

import (
	"openapi/pkg/models/shared"
)

type SalesCreditNotesGetResponse struct {
	ContentType                       string
	PageResultSalesCreditNoteQueryDto *shared.PageResultSalesCreditNoteQueryDto
	StatusCode                        int64
}
