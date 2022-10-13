package operations

import (
	"time"
)

type GetLatestTotalsFormatEnum string

const (
	GetLatestTotalsFormatEnumJSON GetLatestTotalsFormatEnum = "json"
	GetLatestTotalsFormatEnumXML  GetLatestTotalsFormatEnum = "xml"
)

type GetLatestTotalsQueryParams struct {
	Format *GetLatestTotalsFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetLatestTotalsRequest struct {
	QueryParams GetLatestTotalsQueryParams
}

type GetLatestTotals200ApplicationJSON struct {
	Confirmed  *int64     `json:"confirmed"`
	Critical   *int64     `json:"critical"`
	Deaths     *int64     `json:"deaths"`
	LastChange *time.Time `json:"lastChange"`
	LastUpdate *time.Time `json:"lastUpdate"`
	Recovered  *int64     `json:"recovered"`
}

type GetLatestTotalsResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	GetLatestTotals200ApplicationJSONObjects []GetLatestTotals200ApplicationJSON
}
