package operations

import (
	"openapi/pkg/models/shared"
)

type GsiMarketdataQueryParams struct {
	Zip *string `queryParam:"style=form,explode=true,name=zip"`
}

type GsiMarketdataRequest struct {
	QueryParams GsiMarketdataQueryParams
}

type GsiMarketdata200ApplicationJSON struct {
	Data []shared.MarketData `json:"data"`
}

type GsiMarketdataResponse struct {
	ContentType                           string
	StatusCode                            int64
	GsiMarketdata200ApplicationJSONObject *GsiMarketdata200ApplicationJSON
}
