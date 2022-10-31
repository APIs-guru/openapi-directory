package operations

import (
"openapi/pkg/models/shared")


type ListPromotionsMixinEnum string

const (
    ListPromotionsMixinEnumRelatedLinks ListPromotionsMixinEnum = "related_links"
)



type ListPromotionsStatusEnum string

const (
    ListPromotionsStatusEnumCurrent ListPromotionsStatusEnum = "current"
)


type ListPromotionsQueryParams struct {
    Context *string `queryParam:"style=form,explode=true,name=context"`
    Mixin []ListPromotionsMixinEnum `queryParam:"style=form,explode=true,name=mixin"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    PartnerID []string `queryParam:"style=form,explode=true,name=partner_id"`
    PartnerPid []string `queryParam:"style=form,explode=true,name=partner_pid"`
    Pid []string `queryParam:"style=form,explode=true,name=pid"`
    PromotedBy []string `queryParam:"style=form,explode=true,name=promoted_by"`
    PromotedFor []string `queryParam:"style=form,explode=true,name=promoted_for"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Status []ListPromotionsStatusEnum `queryParam:"style=form,explode=true,name=status"`
    
}

type ListPromotionsRequest struct {
    QueryParams ListPromotionsQueryParams 
    
}

type ListPromotionsResponse struct {
    Body []byte 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Nitro *interface{} 
    
}

