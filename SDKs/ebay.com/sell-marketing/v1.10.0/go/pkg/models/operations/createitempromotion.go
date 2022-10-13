package operations

import (
	"openapi/pkg/models/shared"
)

type CreateItemPromotionSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type CreateItemPromotionRequest struct {
	Request  *shared.ItemPromotion `request:"mediaType=application/json"`
	Security CreateItemPromotionSecurity
}

type CreateItemPromotionResponse struct {
	BaseResponse *shared.BaseResponse
	ContentType  string
	Headers      map[string][]string
	StatusCode   int64
}
