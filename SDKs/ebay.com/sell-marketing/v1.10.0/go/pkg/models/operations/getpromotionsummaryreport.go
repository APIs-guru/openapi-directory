package operations

import (
"openapi/pkg/models/shared")

type GetPromotionSummaryReportQueryParams struct {
    MarketplaceID string `queryParam:"style=form,explode=true,name=marketplace_id"`
    
}

type GetPromotionSummaryReportSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetPromotionSummaryReportRequest struct {
    QueryParams GetPromotionSummaryReportQueryParams 
    Security GetPromotionSummaryReportSecurity 
    
}

type GetPromotionSummaryReportResponse struct {
    ContentType string 
    StatusCode int64 
    SummaryReportResponse *shared.SummaryReportResponse 
    
}

