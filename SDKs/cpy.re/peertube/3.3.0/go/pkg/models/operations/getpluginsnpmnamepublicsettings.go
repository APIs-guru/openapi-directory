package operations



type GetPluginsNpmNamePublicSettingsPathParams struct {
    NpmName string `pathParam:"style=simple,explode=false,name=npmName"`
    
}

type GetPluginsNpmNamePublicSettingsRequest struct {
    PathParams GetPluginsNpmNamePublicSettingsPathParams 
    
}

type GetPluginsNpmNamePublicSettingsResponse struct {
    ContentType string 
    GetPluginsNpmNamePublicSettings200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

