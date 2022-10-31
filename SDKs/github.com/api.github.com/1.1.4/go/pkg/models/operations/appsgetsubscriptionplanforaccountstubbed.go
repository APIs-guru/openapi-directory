package operations

import (
	"openapi/pkg/models/shared"
)

type AppsGetSubscriptionPlanForAccountStubbedPathParams struct {
	AccountID int64 `pathParam:"style=simple,explode=false,name=account_id"`
}

type AppsGetSubscriptionPlanForAccountStubbedRequest struct {
	PathParams AppsGetSubscriptionPlanForAccountStubbedPathParams
}

type AppsGetSubscriptionPlanForAccountStubbedResponse struct {
	ContentType         string
	StatusCode          int64
	BasicError          *shared.BasicError
	MarketplacePurchase *shared.MarketplacePurchase
}
