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
	ID              *int64  `json:"id,omitempty"`
	MerchantID      *int64  `json:"merchantId,omitempty"`
	MerchantOrderID *string `json:"merchantOrderId,omitempty"`
}

type GetReturns200ApplicationJSONDataReason struct {
	ID    int64  `json:"id"`
	Title string `json:"title"`
}

type GetReturns200ApplicationJSONDataRmaItemsItem struct {
	ID  *int64  `json:"id,omitempty"`
	Sku *string `json:"sku,omitempty"`
}

type GetReturns200ApplicationJSONDataRmaItemsNonRestockedReason struct {
	ID    *int64  `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
}

type GetReturns200ApplicationJSONDataRmaItemsRmaItemV2 struct {
	Comments           *string                                                     `json:"comments,omitempty"`
	ID                 *int64                                                      `json:"id,omitempty"`
	Item               *GetReturns200ApplicationJSONDataRmaItemsItem               `json:"item,omitempty"`
	NonRestockedReason *GetReturns200ApplicationJSONDataRmaItemsNonRestockedReason `json:"nonRestockedReason,omitempty"`
	QuantityExpected   *int64                                                      `json:"quantityExpected,omitempty"`
	QuantityRestocked  *int64                                                      `json:"quantityRestocked,omitempty"`
	QuantityReturned   *int64                                                      `json:"quantityReturned,omitempty"`
	QuantityShipped    *int64                                                      `json:"quantityShipped,omitempty"`
}

type GetReturns200ApplicationJSONDataStatus struct {
	ID    int64  `json:"id"`
	Title string `json:"title"`
}

type GetReturns200ApplicationJSONDataUpdatedByUserV2 struct {
	ID int64 `json:"id"`
}

type GetReturns200ApplicationJSONDataReturnV2 struct {
	Comments   *string                                                                                             `json:"comments,omitempty"`
	CreatedAt  time.Time                                                                                           `json:"createdAt"`
	CreatedBy  shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy"`
	ID         int64                                                                                               `json:"id"`
	Order      *GetReturns200ApplicationJSONDataOrder                                                              `json:"order,omitempty"`
	Reason     GetReturns200ApplicationJSONDataReason                                                              `json:"reason"`
	ReturnedBy *string                                                                                             `json:"returnedBy,omitempty"`
	RmaItems   []GetReturns200ApplicationJSONDataRmaItemsRmaItemV2                                                 `json:"rmaItems,omitempty"`
	RmaNumber  *string                                                                                             `json:"rmaNumber,omitempty"`
	Status     GetReturns200ApplicationJSONDataStatus                                                              `json:"status"`
	UpdatedAt  time.Time                                                                                           `json:"updatedAt"`
	UpdatedBy  GetReturns200ApplicationJSONDataUpdatedByUserV2                                                     `json:"updatedBy"`
}

type GetReturns200ApplicationJSONMetaPaginationPaginationV2 struct {
	Count       *int64 `json:"count,omitempty"`
	CurrentPage *int64 `json:"currentPage,omitempty"`
	Total       *int64 `json:"total,omitempty"`
	TotalPages  *int64 `json:"totalPages,omitempty"`
}

type GetReturns200ApplicationJSONMeta struct {
	Pagination *GetReturns200ApplicationJSONMetaPaginationPaginationV2 `json:"pagination,omitempty"`
}

type GetReturns200ApplicationJSONReturnsArrayV2 struct {
	Data []GetReturns200ApplicationJSONDataReturnV2 `json:"data,omitempty"`
	Meta *GetReturns200ApplicationJSONMeta          `json:"meta,omitempty"`
}

type GetReturnsResponse struct {
	ContentType    string
	ReturnsArrayV2 *GetReturns200ApplicationJSONReturnsArrayV2
	StatusCode     int64
}
