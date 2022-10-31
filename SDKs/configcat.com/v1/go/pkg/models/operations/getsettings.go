package operations

import (
"openapi/pkg/models/shared")

type GetSettingsPathParams struct {
    ConfigID string `pathParam:"style=simple,explode=false,name=configId"`
    
}

type GetSettingsRequest struct {
    PathParams GetSettingsPathParams 
    
}

type GetSettingsResponse struct {
    ContentType string 
    SettingModelHaljsons []shared.SettingModelHaljson 
    SettingModels []shared.SettingModel 
    StatusCode int64 
    
}

