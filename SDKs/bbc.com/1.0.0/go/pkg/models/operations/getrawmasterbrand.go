package operations



type GetRawMasterbrandPathParams struct {
    Mbid string `pathParam:"style=simple,explode=false,name=mbid"`
    
}

type GetRawMasterbrandRequest struct {
    PathParams GetRawMasterbrandPathParams 
    
}

type GetRawMasterbrandResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Nitro *interface{} 
    
}

