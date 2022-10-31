package operations

import (
"openapi/pkg/models/shared")

type DeleteItemPriceMarkdownPromotionPathParams struct {
    PromotionID string `pathParam:"style=simple,explode=false,name=promotion_id"`
    
}

type DeleteItemPriceMarkdownPromotionSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type DeleteItemPriceMarkdownPromotionRequest struct {
    PathParams DeleteItemPriceMarkdownPromotionPathParams 
    Security DeleteItemPriceMarkdownPromotionSecurity 
    
}

type DeleteItemPriceMarkdownPromotionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

