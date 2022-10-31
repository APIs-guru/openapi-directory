package operations

import (
"openapi/pkg/models/shared")

type GetPromotionReportsQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    MarketplaceID string `queryParam:"style=form,explode=true,name=marketplace_id"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    PromotionStatus *string `queryParam:"style=form,explode=true,name=promotion_status"`
    PromotionType *string `queryParam:"style=form,explode=true,name=promotion_type"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    
}

type GetPromotionReportsSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetPromotionReportsRequest struct {
    QueryParams GetPromotionReportsQueryParams 
    Security GetPromotionReportsSecurity 
    
}

type GetPromotionReportsResponse struct {
    ContentType string 
    PromotionsReportPagedCollection *shared.PromotionsReportPagedCollection 
    StatusCode int64 
    
}

