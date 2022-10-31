package operations

import (
	"openapi/pkg/models/shared"
)

type GetVenuesResponse struct {
	ContentType string
	StatusCode  int64
	Venues      []shared.Venue
}
