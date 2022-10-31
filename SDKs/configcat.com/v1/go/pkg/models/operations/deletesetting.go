package operations



type DeleteSettingPathParams struct {
    SettingID int32 `pathParam:"style=simple,explode=false,name=settingId"`
    
}

type DeleteSettingRequest struct {
    PathParams DeleteSettingPathParams 
    
}

type DeleteSettingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

