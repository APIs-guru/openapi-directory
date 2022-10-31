package operations



type AccessSavePathParams struct {
    Filename string `pathParam:"style=simple,explode=false,name=filename"`
    
}

type AccessSaveRequest struct {
    PathParams AccessSavePathParams 
    
}

type AccessSaveResponse struct {
    ContentType string 
    StatusCode int64 
    AccessSave200ApplicationJSONStrings []string 
    
}

