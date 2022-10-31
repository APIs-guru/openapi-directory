package operations

import (
	"openapi/pkg/models/shared"
)

type OmReadingsResponse struct {
	ContentType string
	StatusCode  int64
	Ommeters    []shared.Ommeters
}
