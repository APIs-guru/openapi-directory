package operations

import (
	"time"
)

type GetLatestCountryDataByCodeFormatEnum string

const (
	GetLatestCountryDataByCodeFormatEnumJSON GetLatestCountryDataByCodeFormatEnum = "json"
	GetLatestCountryDataByCodeFormatEnumXML  GetLatestCountryDataByCodeFormatEnum = "xml"
)

type GetLatestCountryDataByCodeQueryParams struct {
	Code   string                                `queryParam:"style=form,explode=true,name=code"`
	Format *GetLatestCountryDataByCodeFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetLatestCountryDataByCodeRequest struct {
	QueryParams GetLatestCountryDataByCodeQueryParams
}

type GetLatestCountryDataByCode200ApplicationJSON struct {
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

type GetLatestCountryDataByCodeResponse struct {
	Body                                                []byte
	ContentType                                         string
	StatusCode                                          int64
	GetLatestCountryDataByCode200ApplicationJSONObjects []GetLatestCountryDataByCode200ApplicationJSON
}
