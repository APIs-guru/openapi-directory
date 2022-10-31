package operations



type GetConfigurationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetConfigurationRequest struct {
    PathParams GetConfigurationPathParams 
    
}

type GetConfigurationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

