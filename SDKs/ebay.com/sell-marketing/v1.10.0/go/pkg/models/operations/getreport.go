package operations

import (
"openapi/pkg/models/shared")

type GetReportPathParams struct {
    ReportID string `pathParam:"style=simple,explode=false,name=report_id"`
    
}

type GetReportSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetReportRequest struct {
    PathParams GetReportPathParams 
    Security GetReportSecurity 
    
}

type GetReportResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

