package operations

import (
	"time"
)

type GetLatestAllCountriesFormatEnum string

const (
	GetLatestAllCountriesFormatEnumJSON GetLatestAllCountriesFormatEnum = "json"
	GetLatestAllCountriesFormatEnumXML  GetLatestAllCountriesFormatEnum = "xml"
)

type GetLatestAllCountriesQueryParams struct {
	Format *GetLatestAllCountriesFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetLatestAllCountriesRequest struct {
	QueryParams GetLatestAllCountriesQueryParams
}

type GetLatestAllCountries200ApplicationJSON struct {
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

type GetLatestAllCountriesResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	GetLatestAllCountries200ApplicationJSONObjects []GetLatestAllCountries200ApplicationJSON
}
