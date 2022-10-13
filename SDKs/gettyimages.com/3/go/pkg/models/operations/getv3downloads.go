package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetV3DownloadsQueryParams struct {
	CompanyDownloads *bool                          `queryParam:"style=form,explode=true,name=company_downloads"`
	DateFrom         *time.Time                     `queryParam:"style=form,explode=true,name=date_from"`
	DateTo           *time.Time                     `queryParam:"style=form,explode=true,name=date_to"`
	Page             *int32                         `queryParam:"style=form,explode=true,name=page"`
	PageSize         *int32                         `queryParam:"style=form,explode=true,name=page_size"`
	ProductType      *shared.ProductTypeRequestEnum `queryParam:"style=form,explode=true,name=product_type"`
	UseTime          *bool                          `queryParam:"style=form,explode=true,name=use_time"`
}

type GetV3DownloadsHeaders struct {
	AcceptLanguage *string `header:"name=Accept-Language"`
}

type GetV3DownloadsRequest struct {
	QueryParams GetV3DownloadsQueryParams
	Headers     GetV3DownloadsHeaders
}

type GetV3DownloadsResponse struct {
	ContentType          string
	GetDownloadsResponse *shared.GetDownloadsResponse
	StatusCode           int64
}
