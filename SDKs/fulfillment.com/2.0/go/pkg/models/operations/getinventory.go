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

type GetInventoryItemInventoryArrayV2ItemInventoryV2Item struct {
	ID           *int64  `json:"id,omitempty"`
	SkuReference *string `json:"skuReference,omitempty"`
}

type GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant struct {
	Name *string `json:"name,omitempty"`
}

type GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal struct {
	AvailableToPromise *int64 `json:"availableToPromise,omitempty"`
}

type GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity struct {
	Total *GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal `json:"total,omitempty"`
}

type GetInventoryItemInventoryArrayV2ItemInventoryV2 struct {
	Item     *GetInventoryItemInventoryArrayV2ItemInventoryV2Item     `json:"item,omitempty"`
	Merchant *GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant `json:"merchant,omitempty"`
	Quantity *GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity `json:"quantity,omitempty"`
}

type GetInventoryItemInventoryArrayV2MetaPaginationV2 struct {
	Count       *int64 `json:"count,omitempty"`
	CurrentPage *int64 `json:"currentPage,omitempty"`
	Total       *int64 `json:"total,omitempty"`
	TotalPages  *int64 `json:"totalPages,omitempty"`
}

type GetInventoryItemInventoryArrayV2Meta struct {
	Pagination *GetInventoryItemInventoryArrayV2MetaPaginationV2 `json:"pagination,omitempty"`
}

type GetInventoryItemInventoryArrayV2 struct {
	Data []GetInventoryItemInventoryArrayV2ItemInventoryV2 `json:"data,omitempty"`
	Meta *GetInventoryItemInventoryArrayV2Meta             `json:"meta,omitempty"`
}

type GetInventoryResponse struct {
	ContentType                                           string
	ItemInventoryArrayV2                                  *GetInventoryItemInventoryArrayV2
	StatusCode                                            int64
	OneordersGetResponses404ContentApplication1jsonSchema *shared.OneordersGetResponses404ContentApplication1jsonSchema
}
