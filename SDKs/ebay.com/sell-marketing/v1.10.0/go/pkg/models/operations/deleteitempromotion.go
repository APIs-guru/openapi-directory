package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteItemPromotionPathParams struct {
	PromotionID string `pathParam:"style=simple,explode=false,name=promotion_id"`
}

type DeleteItemPromotionSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type DeleteItemPromotionRequest struct {
	PathParams DeleteItemPromotionPathParams
	Security   DeleteItemPromotionSecurity
}

type DeleteItemPromotionResponse struct {
	ContentType string
	StatusCode  int64
}
