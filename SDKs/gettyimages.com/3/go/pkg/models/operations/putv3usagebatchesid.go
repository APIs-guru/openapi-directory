package operations

import (
"openapi/pkg/models/shared")

type PutV3UsageBatchesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutV3UsageBatchesIDRequest struct {
    PathParams PutV3UsageBatchesIDPathParams 
    Request *shared.ReportUsageBatchRequest `request:"mediaType=application/json"`
    
}

type PutV3UsageBatchesIDResponse struct {
    ContentType string 
    StatusCode int64 
    ReportUsageBatchResponse *shared.ReportUsageBatchResponse 
    
}

