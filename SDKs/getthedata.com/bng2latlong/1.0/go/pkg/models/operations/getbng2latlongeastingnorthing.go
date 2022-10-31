package operations



type GetBng2latlongEastingNorthingPathParams struct {
    Easting int64 `pathParam:"style=simple,explode=false,name=easting"`
    Northing int64 `pathParam:"style=simple,explode=false,name=northing"`
    
}

type GetBng2latlongEastingNorthingRequest struct {
    PathParams GetBng2latlongEastingNorthingPathParams 
    
}


type GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum string

const (
    GetBng2latlongEastingNorthing200ApplicationJSONStatusEnumOk GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum = "ok"
GetBng2latlongEastingNorthing200ApplicationJSONStatusEnumError GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum = "error"
)


type GetBng2latlongEastingNorthing200ApplicationJSON struct {
    Easting *int64 `json:"easting,omitempty"`
    Error *string `json:"error,omitempty"`
    Latitude *float64 `json:"latitude,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    Northing *int64 `json:"northing,omitempty"`
    Status *GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum `json:"status,omitempty"`
    
}

type GetBng2latlongEastingNorthingResponse struct {
    ContentType string 
    GetBng2latlongEastingNorthing200ApplicationJSONObject *GetBng2latlongEastingNorthing200ApplicationJSON 
    StatusCode int64 
    
}

