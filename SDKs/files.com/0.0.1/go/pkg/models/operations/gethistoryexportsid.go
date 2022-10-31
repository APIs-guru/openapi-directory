package operations

import (
"openapi/pkg/models/shared")

type GetHistoryExportsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetHistoryExportsIDRequest struct {
    PathParams GetHistoryExportsIDPathParams 
    
}

type GetHistoryExportsIDResponse struct {
    ContentType string 
    HistoryExportEntity *shared.HistoryExportEntity 
    StatusCode int64 
    
}

