package operations

import (
	"openapi/pkg/models/shared"
)

type CrmCheckPathParams struct {
	Vin string `pathParam:"style=simple,explode=false,name=vin"`
}

type CrmCheckQueryParams struct {
	APIKey   *string `queryParam:"style=form,explode=true,name=api_key"`
	SaleDate string  `queryParam:"style=form,explode=true,name=sale_date"`
}

type CrmCheckRequest struct {
	PathParams  CrmCheckPathParams
	QueryParams CrmCheckQueryParams
}

type CrmCheckResponse struct {
	CrmResponse *shared.CrmResponse
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
