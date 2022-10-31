package operations

import (
"openapi/pkg/models/shared")

type UpdateItemPriceMarkdownPromotionPathParams struct {
    PromotionID string `pathParam:"style=simple,explode=false,name=promotion_id"`
    
}

type UpdateItemPriceMarkdownPromotionSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type UpdateItemPriceMarkdownPromotionRequest struct {
    PathParams UpdateItemPriceMarkdownPromotionPathParams 
    Request *shared.ItemPriceMarkdown `request:"mediaType=application/json"`
    Security UpdateItemPriceMarkdownPromotionSecurity 
    
}

type UpdateItemPriceMarkdownPromotionResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateItemPriceMarkdownPromotion200ApplicationJSONObject map[string]interface{} 
    
}

