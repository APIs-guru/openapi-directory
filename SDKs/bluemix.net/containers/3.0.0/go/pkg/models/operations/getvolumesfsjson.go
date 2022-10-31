package operations

import (
"openapi/pkg/models/shared")

type GetVolumesFsJSONHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type GetVolumesFsJSONRequest struct {
    Headers GetVolumesFsJSONHeaders 
    
}

type GetVolumesFsJSONResponse struct {
    ContentType string 
    Fileshares []shared.Fileshare 
    StatusCode int64 
    
}

