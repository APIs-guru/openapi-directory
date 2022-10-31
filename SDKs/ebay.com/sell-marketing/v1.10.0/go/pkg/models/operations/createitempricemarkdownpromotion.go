package operations

import (
"openapi/pkg/models/shared")

type CreateItemPriceMarkdownPromotionSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CreateItemPriceMarkdownPromotionRequest struct {
    Request *shared.ItemPriceMarkdown `request:"mediaType=application/json"`
    Security CreateItemPriceMarkdownPromotionSecurity 
    
}

type CreateItemPriceMarkdownPromotionResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateItemPriceMarkdownPromotion201ApplicationJSONObject map[string]interface{} 
    
}

