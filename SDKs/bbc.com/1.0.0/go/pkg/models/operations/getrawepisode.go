package operations



type GetRawEpisodePathParams struct {
    Pid string `pathParam:"style=simple,explode=false,name=pid"`
    
}

type GetRawEpisodeRequest struct {
    PathParams GetRawEpisodePathParams 
    
}

type GetRawEpisodeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Nitro *interface{} 
    
}

