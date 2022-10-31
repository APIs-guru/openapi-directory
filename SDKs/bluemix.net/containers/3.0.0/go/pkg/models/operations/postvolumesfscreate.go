package operations

import (
"openapi/pkg/models/shared")

type PostVolumesFsCreateHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type PostVolumesFsCreateRequest struct {
    Headers PostVolumesFsCreateHeaders 
    Request shared.FileshareParam `request:"mediaType=application/json"`
    
}

type PostVolumesFsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

