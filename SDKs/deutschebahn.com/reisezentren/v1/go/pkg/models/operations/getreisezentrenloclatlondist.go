package operations

import (
	"openapi/pkg/models/shared"
)

type GetReisezentrenLocLatLonDistPathParams struct {
	Dist float32 `pathParam:"style=simple,explode=false,name=dist"`
	Lat  float32 `pathParam:"style=simple,explode=false,name=lat"`
	Lon  float32 `pathParam:"style=simple,explode=false,name=lon"`
}

type GetReisezentrenLocLatLonDistRequest struct {
	PathParams GetReisezentrenLocLatLonDistPathParams
}

type GetReisezentrenLocLatLonDistResponse struct {
	ContentType  string
	StatusCode   int64
	TravelCenter *shared.TravelCenter
}
