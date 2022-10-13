package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemPriceMarkdownPromotionPathParams struct {
	PromotionID string `pathParam:"style=simple,explode=false,name=promotion_id"`
}

type GetItemPriceMarkdownPromotionSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetItemPriceMarkdownPromotionRequest struct {
	PathParams GetItemPriceMarkdownPromotionPathParams
	Security   GetItemPriceMarkdownPromotionSecurity
}

type GetItemPriceMarkdownPromotionResponse struct {
	ContentType       string
	ItemPriceMarkdown *shared.ItemPriceMarkdown
	StatusCode        int64
}
