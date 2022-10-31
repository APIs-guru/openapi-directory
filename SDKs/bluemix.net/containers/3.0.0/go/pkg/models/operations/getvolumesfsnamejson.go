package operations

import (
"openapi/pkg/models/shared")

type GetVolumesFsNameJSONPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetVolumesFsNameJSONHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type GetVolumesFsNameJSONRequest struct {
    PathParams GetVolumesFsNameJSONPathParams 
    Headers GetVolumesFsNameJSONHeaders 
    
}

type GetVolumesFsNameJSONResponse struct {
    ContentType string 
    GetFileshareDetails []shared.GetFileshareDetails 
    StatusCode int64 
    
}

