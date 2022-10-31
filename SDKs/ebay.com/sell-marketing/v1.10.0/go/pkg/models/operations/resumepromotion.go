package operations

import (
"openapi/pkg/models/shared")

type ResumePromotionPathParams struct {
    PromotionID string `pathParam:"style=simple,explode=false,name=promotion_id"`
    
}

type ResumePromotionSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type ResumePromotionRequest struct {
    PathParams ResumePromotionPathParams 
    Security ResumePromotionSecurity 
    
}

type ResumePromotionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

