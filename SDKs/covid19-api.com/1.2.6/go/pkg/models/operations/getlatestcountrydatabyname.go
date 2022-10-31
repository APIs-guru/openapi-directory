package operations

import (
"time")


type GetLatestCountryDataByNameFormatEnum string

const (
    GetLatestCountryDataByNameFormatEnumJSON GetLatestCountryDataByNameFormatEnum = "json"
GetLatestCountryDataByNameFormatEnumXML GetLatestCountryDataByNameFormatEnum = "xml"
)


type GetLatestCountryDataByNameQueryParams struct {
    Format *GetLatestCountryDataByNameFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Name string `queryParam:"style=form,explode=true,name=name"`
    
}

type GetLatestCountryDataByNameRequest struct {
    QueryParams GetLatestCountryDataByNameQueryParams 
    
}

type GetLatestCountryDataByName200ApplicationJSON struct {
    Confirmed *int64 `json:"confirmed,omitempty"`
    Country *string `json:"country,omitempty"`
    Critical *int64 `json:"critical,omitempty"`
    Deaths *int64 `json:"deaths,omitempty"`
    LastChange *time.Time `json:"lastChange,omitempty"`
    LastUpdate *time.Time `json:"lastUpdate,omitempty"`
    Latitude *float32 `json:"latitude,omitempty"`
    Longitude *float32 `json:"longitude,omitempty"`
    Recovered *int64 `json:"recovered,omitempty"`
    
}

type GetLatestCountryDataByNameResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    GetLatestCountryDataByName200ApplicationJSONObjects []GetLatestCountryDataByName200ApplicationJSON 
    
}

