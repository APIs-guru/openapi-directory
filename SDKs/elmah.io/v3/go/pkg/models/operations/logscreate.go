package operations

import (
"openapi/pkg/models/shared")

type LogsCreateRequests struct {
    CreateLog *shared.CreateLog `request:"mediaType=application/*+json"`
    CreateLog1 *shared.CreateLog `request:"mediaType=application/json"`
    CreateLog2 *shared.CreateLog `request:"mediaType=application/json-patch+json"`
    CreateLog3 *shared.CreateLog `request:"mediaType=text/json"`
    
}

type LogsCreateRequest struct {
    Request *LogsCreateRequests 
    
}

type LogsCreateResponse struct {
    Body []byte 
    ContentType string 
    CreateLogResult *shared.CreateLogResult 
    StatusCode int64 
    
}

