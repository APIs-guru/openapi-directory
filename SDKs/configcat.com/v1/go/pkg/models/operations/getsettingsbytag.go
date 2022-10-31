package operations

import (
"openapi/pkg/models/shared")

type GetSettingsByTagPathParams struct {
    TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
    
}

type GetSettingsByTagRequest struct {
    PathParams GetSettingsByTagPathParams 
    
}

type GetSettingsByTagResponse struct {
    ContentType string 
    SettingModelHaljsons []shared.SettingModelHaljson 
    SettingModels []shared.SettingModel 
    StatusCode int64 
    
}

