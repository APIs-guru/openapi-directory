package operations



type GeneralAPIDateFormatsHeaders struct {
    XAuthKey string `header:"style=simple,explode=false,name=x-auth-key"`
    XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
    
}

type GeneralAPIDateFormatsRequest struct {
    Headers GeneralAPIDateFormatsHeaders 
    
}

type GeneralAPIDateFormatsResponse struct {
    Body []byte 
    ContentType string 
    GeneralAPIDateFormats200ApplicationJSONStrings []string 
    GeneralAPIDateFormats200TextJSONStrings []string 
    StatusCode int64 
    
}

