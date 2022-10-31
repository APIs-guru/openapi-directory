package operations



type GetVolumesFsFlavorsJSONHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type GetVolumesFsFlavorsJSONRequest struct {
    Headers GetVolumesFsFlavorsJSONHeaders 
    
}

type GetVolumesFsFlavorsJSONResponse struct {
    ContentType string 
    GetVolumesFsFlavorsJSON200ApplicationJSONIntegers []int64 
    StatusCode int64 
    
}

