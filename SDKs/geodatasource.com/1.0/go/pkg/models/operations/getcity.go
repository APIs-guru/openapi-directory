package operations




type GetCityFormatEnum string

const (
    GetCityFormatEnumJSON GetCityFormatEnum = "json"
GetCityFormatEnumXML GetCityFormatEnum = "xml"
)


type GetCityQueryParams struct {
    Format *GetCityFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Key string `queryParam:"style=form,explode=true,name=key"`
    Lat float64 `queryParam:"style=form,explode=true,name=lat"`
    Lng float64 `queryParam:"style=form,explode=true,name=lng"`
    
}

type GetCityRequest struct {
    QueryParams GetCityQueryParams 
    
}

type GetCityResponse struct {
    ContentType string 
    GetCity200ApplicationJSONString *string 
    StatusCode int64 
    
}

