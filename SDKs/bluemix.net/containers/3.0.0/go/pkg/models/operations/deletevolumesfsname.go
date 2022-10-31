package operations



type DeleteVolumesFsNamePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DeleteVolumesFsNameHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type DeleteVolumesFsNameRequest struct {
    PathParams DeleteVolumesFsNamePathParams 
    Headers DeleteVolumesFsNameHeaders 
    
}

type DeleteVolumesFsNameResponse struct {
    ContentType string 
    StatusCode int64 
    
}

