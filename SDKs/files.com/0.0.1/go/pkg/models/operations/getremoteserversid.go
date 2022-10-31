package operations

import (
"openapi/pkg/models/shared")

type GetRemoteServersIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetRemoteServersIDRequest struct {
    PathParams GetRemoteServersIDPathParams 
    
}

type GetRemoteServersIDResponse struct {
    ContentType string 
    RemoteServerEntity *shared.RemoteServerEntity 
    StatusCode int64 
    
}

