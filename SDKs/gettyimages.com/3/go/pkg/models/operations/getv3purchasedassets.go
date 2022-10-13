package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetV3PurchasedAssetsQueryParams struct {
	CompanyPurchases *bool      `queryParam:"style=form,explode=true,name=company_purchases"`
	DateFrom         *time.Time `queryParam:"style=form,explode=true,name=date_from"`
	DateTo           *time.Time `queryParam:"style=form,explode=true,name=date_to"`
	Page             *int32     `queryParam:"style=form,explode=true,name=page"`
	PageSize         *int32     `queryParam:"style=form,explode=true,name=page_size"`
}

type GetV3PurchasedAssetsHeaders struct {
	AcceptLanguage *string `header:"name=Accept-Language"`
}

type GetV3PurchasedAssetsRequest struct {
	QueryParams GetV3PurchasedAssetsQueryParams
	Headers     GetV3PurchasedAssetsHeaders
}

type GetV3PurchasedAssetsResponse struct {
	ContentType            string
	PreviousAssetPurchases *shared.PreviousAssetPurchases
	StatusCode             int64
}
