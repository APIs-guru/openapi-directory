package operations

import (
	"openapi/pkg/models/shared"
)

type PausePromotionPathParams struct {
	PromotionID string `pathParam:"style=simple,explode=false,name=promotion_id"`
}

type PausePromotionSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type PausePromotionRequest struct {
	PathParams PausePromotionPathParams
	Security   PausePromotionSecurity
}

type PausePromotionResponse struct {
	ContentType string
	StatusCode  int64
}
