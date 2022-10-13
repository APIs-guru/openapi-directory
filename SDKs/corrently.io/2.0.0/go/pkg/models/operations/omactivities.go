package operations

import (
	"openapi/pkg/models/shared"
)

type OmActivitiesResponse struct {
	ContentType string
	StatusCode  int64
	Ommeters    []shared.Ommeters
}
