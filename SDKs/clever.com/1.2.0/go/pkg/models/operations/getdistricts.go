package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistrictsResponse struct {
	ContentType       string
	DistrictsResponse *shared.DistrictsResponse
	StatusCode        int64
}
