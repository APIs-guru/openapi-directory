package operations

import (
"openapi/pkg/models/shared")

type AccountGetLogsSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountGetLogsRequest struct {
    Security AccountGetLogsSecurity 
    
}

type AccountGetLogsResponse struct {
    ContentType string 
    StatusCode int64 
    LogList *shared.LogList 
    
}

