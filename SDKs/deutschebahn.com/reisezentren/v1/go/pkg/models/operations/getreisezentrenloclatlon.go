package operations

import (
	"openapi/pkg/models/shared"
)

type GetReisezentrenLocLatLonPathParams struct {
	Lat float32 `pathParam:"style=simple,explode=false,name=lat"`
	Lon float32 `pathParam:"style=simple,explode=false,name=lon"`
}

type GetReisezentrenLocLatLonRequest struct {
	PathParams GetReisezentrenLocLatLonPathParams
}

type GetReisezentrenLocLatLonResponse struct {
	ContentType  string
	StatusCode   int64
	TravelCenter *shared.TravelCenter
}
