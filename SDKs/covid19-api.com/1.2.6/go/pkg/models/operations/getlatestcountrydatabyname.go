package operations

import (
	"time"
)

type GetLatestCountryDataByNameFormatEnum string

const (
	GetLatestCountryDataByNameFormatEnumJSON GetLatestCountryDataByNameFormatEnum = "json"
	GetLatestCountryDataByNameFormatEnumXML  GetLatestCountryDataByNameFormatEnum = "xml"
)

type GetLatestCountryDataByNameQueryParams struct {
	Format *GetLatestCountryDataByNameFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Name   string                                `queryParam:"style=form,explode=true,name=name"`
}

type GetLatestCountryDataByNameRequest struct {
	QueryParams GetLatestCountryDataByNameQueryParams
}

type GetLatestCountryDataByName200ApplicationJSON struct {
	Confirmed  *int64     `json:"confirmed"`
	Country    *string    `json:"country"`
	Critical   *int64     `json:"critical"`
	Deaths     *int64     `json:"deaths"`
	LastChange *time.Time `json:"lastChange"`
	LastUpdate *time.Time `json:"lastUpdate"`
	Latitude   *float32   `json:"latitude"`
	Longitude  *float32   `json:"longitude"`
	Recovered  *int64     `json:"recovered"`
}

type GetLatestCountryDataByNameResponse struct {
	Body                                                []byte
	ContentType                                         string
	StatusCode                                          int64
	GetLatestCountryDataByName200ApplicationJSONObjects []GetLatestCountryDataByName200ApplicationJSON
}
