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

type GetLatestCountryDataByCodeResponse struct {
	Body                                                []byte
	ContentType                                         string
	StatusCode                                          int64
	GetLatestCountryDataByCode200ApplicationJSONObjects []GetLatestCountryDataByCode200ApplicationJSON
}
