package operations

import (
"openapi/pkg/models/shared")

type GetPromotionsQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    MarketplaceID string `queryParam:"style=form,explode=true,name=marketplace_id"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    PromotionStatus *string `queryParam:"style=form,explode=true,name=promotion_status"`
    PromotionType *string `queryParam:"style=form,explode=true,name=promotion_type"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetPromotionsSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetPromotionsRequest struct {
    QueryParams GetPromotionsQueryParams 
    Security GetPromotionsSecurity 
    
}

type GetPromotionsResponse struct {
    ContentType string 
    PromotionsPagedCollection *shared.PromotionsPagedCollection 
    StatusCode int64 
    
}

