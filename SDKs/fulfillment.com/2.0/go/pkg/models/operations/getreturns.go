package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetReturnsQueryParams struct {
	FromDate string `queryParam:"style=form,explode=true,name=fromDate"`
	Limit    *int64 `queryParam:"style=form,explode=true,name=limit"`
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	ToDate   string `queryParam:"style=form,explode=true,name=toDate"`
}

type GetReturnsSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type GetReturnsRequest struct {
	QueryParams GetReturnsQueryParams
	Security    GetReturnsSecurity
}

type GetReturns200ApplicationJSONDataOrder struct {
	ID              *int64  `json:"id"`
	MerchantID      *int64  `json:"merchantId"`
	MerchantOrderID *string `json:"merchantOrderId"`
}

type GetReturns200ApplicationJSONDataReason struct {
	ID    int64  `json:"id"`
	Title string `json:"title"`
}

type GetReturns200ApplicationJSONDataRmaItemsItem struct {
	ID  *int64  `json:"id"`
	Sku *string `json:"sku"`
}

type GetReturns200ApplicationJSONDataRmaItemsNonRestockedReason struct {
	ID    *int64  `json:"id"`
	Title *string `json:"title"`
}

type GetReturns200ApplicationJSONDataRmaItemsRmaItemV2 struct {
	Comments           *string                                                     `json:"comments"`
	ID                 *int64                                                      `json:"id"`
	Item               *GetReturns200ApplicationJSONDataRmaItemsItem               `json:"item"`
	NonRestockedReason *GetReturns200ApplicationJSONDataRmaItemsNonRestockedReason `json:"nonRestockedReason"`
	QuantityExpected   *int64                                                      `json:"quantityExpected"`
	QuantityRestocked  *int64                                                      `json:"quantityRestocked"`
	QuantityReturned   *int64                                                      `json:"quantityReturned"`
	QuantityShipped    *int64                                                      `json:"quantityShipped"`
}

type GetReturns200ApplicationJSONDataStatus struct {
	ID    int64  `json:"id"`
	Title string `json:"title"`
}

type GetReturns200ApplicationJSONDataUpdatedByUserV2 struct {
	ID int64 `json:"id"`
}

type GetReturns200ApplicationJSONDataReturnV2 struct {
	Comments   *string                                                                                             `json:"comments"`
	CreatedAt  time.Time                                                                                           `json:"createdAt"`
	CreatedBy  shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy"`
	ID         int64                                                                                               `json:"id"`
	Order      *GetReturns200ApplicationJSONDataOrder                                                              `json:"order"`
	Reason     GetReturns200ApplicationJSONDataReason                                                              `json:"reason"`
	ReturnedBy *string                                                                                             `json:"returnedBy"`
	RmaItems   []GetReturns200ApplicationJSONDataRmaItemsRmaItemV2                                                 `json:"rmaItems"`
	RmaNumber  *string                                                                                             `json:"rmaNumber"`
	Status     GetReturns200ApplicationJSONDataStatus                                                              `json:"status"`
	UpdatedAt  time.Time                                                                                           `json:"updatedAt"`
	UpdatedBy  GetReturns200ApplicationJSONDataUpdatedByUserV2                                                     `json:"updatedBy"`
}

type GetReturns200ApplicationJSONMetaPaginationPaginationV2 struct {
	Count       *int64 `json:"count"`
	CurrentPage *int64 `json:"currentPage"`
	Total       *int64 `json:"total"`
	TotalPages  *int64 `json:"totalPages"`
}

type GetReturns200ApplicationJSONMeta struct {
	Pagination *GetReturns200ApplicationJSONMetaPaginationPaginationV2 `json:"pagination"`
}

type GetReturns200ApplicationJSONReturnsArrayV2 struct {
	Data []GetReturns200ApplicationJSONDataReturnV2 `json:"data"`
	Meta *GetReturns200ApplicationJSONMeta          `json:"meta"`
}

type GetReturnsResponse struct {
	ContentType    string
	ReturnsArrayV2 *GetReturns200ApplicationJSONReturnsArrayV2
	StatusCode     int64
}
