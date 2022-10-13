package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemPromotionPathParams struct {
	PromotionID string `pathParam:"style=simple,explode=false,name=promotion_id"`
}

type GetItemPromotionSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetItemPromotionRequest struct {
	PathParams GetItemPromotionPathParams
	Security   GetItemPromotionSecurity
}

type GetItemPromotionResponse struct {
	ContentType           string
	ItemPromotionResponse *shared.ItemPromotionResponse
	StatusCode            int64
}
