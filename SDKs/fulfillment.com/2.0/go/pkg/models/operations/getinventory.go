package operations

import (
	"openapi/pkg/models/shared"
)

type GetInventoryQueryParams struct {
	ExternalSkuNames []string `queryParam:"style=form,explode=false,name=externalSkuNames"`
	Limit            *int64   `queryParam:"style=form,explode=true,name=limit"`
	MerchantIds      []int64  `queryParam:"style=form,explode=false,name=merchantIds"`
	Page             *int64   `queryParam:"style=form,explode=true,name=page"`
}

type GetInventorySecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type GetInventoryRequest struct {
	QueryParams GetInventoryQueryParams
	Security    GetInventorySecurity
}

type GetInventory200ApplicationJSONDataItem struct {
	ID           *int64  `json:"id,omitempty"`
	SkuReference *string `json:"skuReference,omitempty"`
}

type GetInventory200ApplicationJSONDataMerchant struct {
	Name *string `json:"name,omitempty"`
}

type GetInventory200ApplicationJSONDataQuantityTotal struct {
	AvailableToPromise *int64 `json:"availableToPromise,omitempty"`
}

type GetInventory200ApplicationJSONDataQuantity struct {
	Total *GetInventory200ApplicationJSONDataQuantityTotal `json:"total,omitempty"`
}

type GetInventory200ApplicationJSONDataItemInventoryV2 struct {
	Item     *GetInventory200ApplicationJSONDataItem     `json:"item,omitempty"`
	Merchant *GetInventory200ApplicationJSONDataMerchant `json:"merchant,omitempty"`
	Quantity *GetInventory200ApplicationJSONDataQuantity `json:"quantity,omitempty"`
}

type GetInventory200ApplicationJSONMetaPaginationPaginationV2 struct {
	Count       *int64 `json:"count,omitempty"`
	CurrentPage *int64 `json:"currentPage,omitempty"`
	Total       *int64 `json:"total,omitempty"`
	TotalPages  *int64 `json:"totalPages,omitempty"`
}

type GetInventory200ApplicationJSONMeta struct {
	Pagination *GetInventory200ApplicationJSONMetaPaginationPaginationV2 `json:"pagination,omitempty"`
}

type GetInventory200ApplicationJSONItemInventoryArrayV2 struct {
	Data []GetInventory200ApplicationJSONDataItemInventoryV2 `json:"data,omitempty"`
	Meta *GetInventory200ApplicationJSONMeta                 `json:"meta,omitempty"`
}

type GetInventoryResponse struct {
	ContentType                                           string
	ItemInventoryArrayV2                                  *GetInventory200ApplicationJSONItemInventoryArrayV2
	StatusCode                                            int64
	OneordersGetResponses404ContentApplication1jsonSchema *shared.OneordersGetResponses404ContentApplication1jsonSchema
}
