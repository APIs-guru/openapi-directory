package operations

import (
	"openapi/pkg/models/shared"
)

type GetV1SalesEntriesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetV1SalesEntriesIDRequest struct {
	PathParams GetV1SalesEntriesIDPathParams
}

type GetV1SalesEntriesIDResponse struct {
	ContentType   string
	SalesEntryDto *shared.SalesEntryDto
	StatusCode    int64
}
