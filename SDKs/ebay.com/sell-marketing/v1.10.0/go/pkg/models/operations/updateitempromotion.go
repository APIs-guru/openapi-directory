package operations

import (
"openapi/pkg/models/shared")

type UpdateItemPromotionPathParams struct {
    PromotionID string `pathParam:"style=simple,explode=false,name=promotion_id"`
    
}

type UpdateItemPromotionSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type UpdateItemPromotionRequest struct {
    PathParams UpdateItemPromotionPathParams 
    Request *shared.ItemPromotion `request:"mediaType=application/json"`
    Security UpdateItemPromotionSecurity 
    
}

type UpdateItemPromotionResponse struct {
    BaseResponse *shared.BaseResponse 
    ContentType string 
    StatusCode int64 
    
}

