package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetOrdersQueryParams struct {
	FromDate     string                    `queryParam:"style=form,explode=true,name=fromDate"`
	Hydrate      []shared.HydrateParamEnum `queryParam:"style=form,explode=false,name=hydrate"`
	Limit        *int64                    `queryParam:"style=form,explode=true,name=limit"`
	MerchantIds  []int64                   `queryParam:"style=form,explode=false,name=merchantIds"`
	Page         *int64                    `queryParam:"style=form,explode=true,name=page"`
	ToDate       string                    `queryParam:"style=form,explode=true,name=toDate"`
	WarehouseIds []int64                   `queryParam:"style=form,explode=false,name=warehouseIds"`
}

type GetOrdersSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type GetOrdersRequest struct {
	QueryParams GetOrdersQueryParams
	Security    GetOrdersSecurity
}

type GetOrders404ApplicationJSONErrorStandardV2 struct {
	Message *string `json:"message,omitempty"`
}

type GetOrders200ApplicationJSON2CurrentStatusStatusActionRequiredBy struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrders200ApplicationJSON2CurrentStatusStatusStage struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrders200ApplicationJSON2CurrentStatusStatusState struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrders200ApplicationJSON2CurrentStatusStatusStatusTypeV2 struct {
	ActionRequiredBy *GetOrders200ApplicationJSON2CurrentStatusStatusActionRequiredBy `json:"actionRequiredBy,omitempty"`
	Code             string                                                           `json:"code"`
	Detail           *string                                                          `json:"detail,omitempty"`
	DetailCode       string                                                           `json:"detailCode"`
	ID               *int64                                                           `json:"id,omitempty"`
	IsClosed         *bool                                                            `json:"isClosed,omitempty"`
	Name             *string                                                          `json:"name,omitempty"`
	Reason           *string                                                          `json:"reason,omitempty"`
	Stage            GetOrders200ApplicationJSON2CurrentStatusStatusStage             `json:"stage"`
	State            GetOrders200ApplicationJSON2CurrentStatusStatusState             `json:"state"`
}

type GetOrders200ApplicationJSON2CurrentStatusStatusEventV2 struct {
	CreatedBy *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy,omitempty"`
	Date      *time.Time                                                                                           `json:"date,omitempty"`
	ID        int64                                                                                                `json:"id"`
	Reason    *string                                                                                              `json:"reason,omitempty"`
	Status    *GetOrders200ApplicationJSON2CurrentStatusStatusStatusTypeV2                                         `json:"status,omitempty"`
}

type GetOrders200ApplicationJSON2LineItemsInventoryDetails struct {
	ExpirationDate *time.Time `json:"expirationDate,omitempty"`
	LotNum         *string    `json:"lotNum,omitempty"`
	Quantity       *int64     `json:"quantity,omitempty"`
	SerialNum      *string    `json:"serialNum,omitempty"`
}

type GetOrders200ApplicationJSON2LineItemsLineDetails struct {
	Description   *string `json:"description,omitempty"`
	ExternalSku   *string `json:"externalSku,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Name          *string `json:"name,omitempty"`
	TotalQuantity *int64  `json:"totalQuantity,omitempty"`
}

type GetOrders200ApplicationJSON2LineItemsRequestedSkuData struct {
	DeclaredValue *string `json:"declaredValue,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Quantity      *int64  `json:"quantity,omitempty"`
	Sku           *string `json:"sku,omitempty"`
}

type GetOrders200ApplicationJSON2LineItemsLineItemsResponseV2 struct {
	ID               *int64                                                  `json:"id,omitempty"`
	InventoryDetails []GetOrders200ApplicationJSON2LineItemsInventoryDetails `json:"inventoryDetails,omitempty"`
	LineDetails      *GetOrders200ApplicationJSON2LineItemsLineDetails       `json:"lineDetails,omitempty"`
	RequestedSkuData *GetOrders200ApplicationJSON2LineItemsRequestedSkuData  `json:"requestedSkuData,omitempty"`
}

type GetOrders200ApplicationJSON2MerchantMerchantV2 struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type GetOrders200ApplicationJSON2OriginalConsigneeIsoIsoCountryV2 struct {
	ID   *int64  `json:"id,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrders200ApplicationJSON2OriginalConsigneeConsigneeV2 struct {
	Address1        string                                                                                               `json:"address1"`
	Address2        *string                                                                                              `json:"address2,omitempty"`
	AddressLocality string                                                                                               `json:"addressLocality"`
	AddressRegion   string                                                                                               `json:"addressRegion"`
	CompanyName     *string                                                                                              `json:"companyName,omitempty"`
	Country         string                                                                                               `json:"country"`
	Email           *string                                                                                              `json:"email,omitempty"`
	FirstName       string                                                                                               `json:"firstName"`
	ID              int64                                                                                                `json:"id"`
	Iso             *GetOrders200ApplicationJSON2OriginalConsigneeIsoIsoCountryV2                                        `json:"iso,omitempty"`
	LastName        string                                                                                               `json:"lastName"`
	Phone           *string                                                                                              `json:"phone,omitempty"`
	PostalCode      string                                                                                               `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                           `json:"updatedAt,omitempty"`
	UpdatedBy       *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy,omitempty"`
}

type GetOrders200ApplicationJSON2ParentOrder struct {
	ID *int64 `json:"id,omitempty"`
}

type GetOrders200ApplicationJSON2TrackingNumbersCarrierCarrierHydratedV2 struct {
	CanReprintPostage  *bool  `json:"canReprintPostage,omitempty"`
	Enabled            *bool  `json:"enabled,omitempty"`
	ID                 int64  `json:"id"`
	IncludePeripherals *bool  `json:"includePeripherals,omitempty"`
	InternalRatesOnly  *bool  `json:"internalRatesOnly,omitempty"`
	Name               string `json:"name"`
	RequiresDimensions *bool  `json:"requiresDimensions,omitempty"`
	Symbol             string `json:"symbol"`
}

type GetOrders200ApplicationJSON2TrackingNumbers struct {
	Carrier *GetOrders200ApplicationJSON2TrackingNumbersCarrierCarrierHydratedV2 `json:"carrier,omitempty"`
}

type GetOrders200ApplicationJSON2WarehouseWarehouseV2 struct {
	ID int64 `json:"id"`
}

type GetOrders200ApplicationJSON2 struct {
	CurrentStatus          GetOrders200ApplicationJSON2CurrentStatusStatusEventV2                                   `json:"currentStatus"`
	DepartDate             *time.Time                                                                               `json:"departDate,omitempty"`
	DispatchDate           *time.Time                                                                               `json:"dispatchDate,omitempty"`
	ID                     int64                                                                                    `json:"id"`
	Integrator             *string                                                                                  `json:"integrator,omitempty"`
	LineItems              []GetOrders200ApplicationJSON2LineItemsLineItemsResponseV2                               `json:"lineItems,omitempty"`
	Merchant               GetOrders200ApplicationJSON2MerchantMerchantV2                                           `json:"merchant"`
	MerchantOrderID        string                                                                                   `json:"merchantOrderId"`
	MerchantShippingMethod string                                                                                   `json:"merchantShippingMethod"`
	OriginalConsignee      GetOrders200ApplicationJSON2OriginalConsigneeConsigneeV2                                 `json:"originalConsignee"`
	ParentOrder            *GetOrders200ApplicationJSON2ParentOrder                                                 `json:"parentOrder,omitempty"`
	PurchaseOrderNum       *string                                                                                  `json:"purchaseOrderNum,omitempty"`
	RecordedOn             time.Time                                                                                `json:"recordedOn"`
	TrackingNumbers        []GetOrders200ApplicationJSON2TrackingNumbers                                            `json:"trackingNumbers,omitempty"`
	ValidatedConsignee     shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"validatedConsignee"`
	Warehouse              *GetOrders200ApplicationJSON2WarehouseWarehouseV2                                        `json:"warehouse,omitempty"`
}

type GetOrdersResponse struct {
	ContentType          string
	ErrorStandardV2      *GetOrders404ApplicationJSONErrorStandardV2
	OrderResponseOneOfV2 *interface{}
	StatusCode           int64
}
