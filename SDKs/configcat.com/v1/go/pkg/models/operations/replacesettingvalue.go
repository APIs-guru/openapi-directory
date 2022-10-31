package operations

import (
"openapi/pkg/models/shared")

type ReplaceSettingValuePathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    SettingID int32 `pathParam:"style=simple,explode=false,name=settingId"`
    
}

type ReplaceSettingValueQueryParams struct {
    Reason *string `queryParam:"style=form,explode=true,name=reason"`
    
}

type ReplaceSettingValueRequests struct {
    UpdateSettingValueModel *shared.UpdateSettingValueModel `request:"mediaType=application/*+json"`
    UpdateSettingValueModel1 *shared.UpdateSettingValueModel `request:"mediaType=application/json"`
    UpdateSettingValueModel2 *shared.UpdateSettingValueModel `request:"mediaType=text/json"`
    
}

type ReplaceSettingValueRequest struct {
    PathParams ReplaceSettingValuePathParams 
    QueryParams ReplaceSettingValueQueryParams 
    Request ReplaceSettingValueRequests 
    
}

type ReplaceSettingValueResponse struct {
    ContentType string 
    SettingValueModel *shared.SettingValueModel 
    SettingValueModelHaljson *shared.SettingValueModelHaljson 
    StatusCode int64 
    
}

