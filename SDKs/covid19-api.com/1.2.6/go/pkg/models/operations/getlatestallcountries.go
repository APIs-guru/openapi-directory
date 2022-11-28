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

type GetLatestAllCountries200ApplicationJSON struct {
	Confirmed  *int64     `json:"confirmed,omitempty"`
	Country    *string    `json:"country,omitempty"`
	Critical   *int64     `json:"critical,omitempty"`
	Deaths     *int64     `json:"deaths,omitempty"`
	LastChange *time.Time `json:"lastChange,omitempty"`
	LastUpdate *time.Time `json:"lastUpdate,omitempty"`
	Latitude   *float32   `json:"latitude,omitempty"`
	Longitude  *float32   `json:"longitude,omitempty"`
	Recovered  *int64     `json:"recovered,omitempty"`
}

type GetLatestAllCountriesRequest struct {
	QueryParams GetLatestAllCountriesQueryParams
}

type GetLatestAllCountriesResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	GetLatestAllCountries200ApplicationJSONObjects []GetLatestAllCountries200ApplicationJSON
}
