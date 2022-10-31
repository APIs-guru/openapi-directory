package operations

import (
"openapi/pkg/models/shared")

type GetReportMetadataForReportTypePathParams struct {
    ReportType string `pathParam:"style=simple,explode=false,name=report_type"`
    
}

type GetReportMetadataForReportTypeSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetReportMetadataForReportTypeRequest struct {
    PathParams GetReportMetadataForReportTypePathParams 
    Security GetReportMetadataForReportTypeSecurity 
    
}

type GetReportMetadataForReportTypeResponse struct {
    ContentType string 
    ReportMetadata *shared.ReportMetadata 
    StatusCode int64 
    
}

