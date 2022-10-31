package operations



type GetImagesJSONHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type GetImagesJSONRequest struct {
    Headers GetImagesJSONHeaders 
    
}

type GetImagesJSONResponse struct {
    ContentType string 
    ImageInfo *interface{} 
    StatusCode int64 
    
}

