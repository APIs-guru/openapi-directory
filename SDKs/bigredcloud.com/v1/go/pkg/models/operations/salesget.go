package operations

import (
	"openapi/pkg/models/shared"
)

type SalesGetResponse struct {
	ContentType             string
	PageResultSalesQueryDto *shared.PageResultSalesQueryDto
	StatusCode              int64
}
