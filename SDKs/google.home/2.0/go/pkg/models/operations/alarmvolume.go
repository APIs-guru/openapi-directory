package operations

import (
"openapi/pkg/models/shared")

type AlarmVolumeRequest struct {
    Request shared.AlarmVolumeRequest `request:"mediaType=application/json"`
    
}

type AlarmVolumeResponse struct {
    ContentType string 
    Getvolume *shared.Getvolume 
    StatusCode int64 
    
}

