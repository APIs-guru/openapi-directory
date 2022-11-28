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

type GetOrdersErrorStandardV2 struct {
	Message *string `json:"message,omitempty"`
}

// GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
// Responsibility for resolving this issue
type GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2 struct {
	ActionRequiredBy *GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy `json:"actionRequiredBy,omitempty"`
	Code             string                                                                               `json:"code"`
	Detail           *string                                                                              `json:"detail,omitempty"`
	DetailCode       string                                                                               `json:"detailCode"`
	ID               *int64                                                                               `json:"id,omitempty"`
	IsClosed         *bool                                                                                `json:"isClosed,omitempty"`
	Name             *string                                                                              `json:"name,omitempty"`
	Reason           *string                                                                              `json:"reason,omitempty"`
	Stage            GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage             `json:"stage"`
	State            GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State             `json:"state"`
}

type GetOrders200ApplicationJSONOrderResponseV2StatusEventV2 struct {
	CreatedBy *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy,omitempty"`
	Date      *time.Time                                                                                           `json:"date,omitempty"`
	ID        int64                                                                                                `json:"id"`
	Reason    *string                                                                                              `json:"reason,omitempty"`
	Status    *GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2                                 `json:"status,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails struct {
	ExpirationDate *time.Time `json:"expirationDate,omitempty"`
	LotNum         *string    `json:"lotNum,omitempty"`
	Quantity       *int64     `json:"quantity,omitempty"`
	SerialNum      *string    `json:"serialNum,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails struct {
	Description   *string `json:"description,omitempty"`
	ExternalSku   *string `json:"externalSku,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Name          *string `json:"name,omitempty"`
	TotalQuantity *int64  `json:"totalQuantity,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData struct {
	DeclaredValue *string `json:"declaredValue,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Quantity      *int64  `json:"quantity,omitempty"`
	Sku           *string `json:"sku,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2 struct {
	ID               *int64                                                                          `json:"id,omitempty"`
	InventoryDetails []GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails `json:"inventoryDetails,omitempty"`
	LineDetails      *GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails       `json:"lineDetails,omitempty"`
	RequestedSkuData *GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData  `json:"requestedSkuData,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2MerchantV2 struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2 struct {
	ID   *int64  `json:"id,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2 struct {
	Address1        string                                                                                               `json:"address1"`
	Address2        *string                                                                                              `json:"address2,omitempty"`
	AddressLocality string                                                                                               `json:"addressLocality"`
	AddressRegion   string                                                                                               `json:"addressRegion"`
	CompanyName     *string                                                                                              `json:"companyName,omitempty"`
	Country         string                                                                                               `json:"country"`
	Email           *string                                                                                              `json:"email,omitempty"`
	FirstName       string                                                                                               `json:"firstName"`
	ID              int64                                                                                                `json:"id"`
	Iso             *GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2                                   `json:"iso,omitempty"`
	LastName        string                                                                                               `json:"lastName"`
	Phone           *string                                                                                              `json:"phone,omitempty"`
	PostalCode      string                                                                                               `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                           `json:"updatedAt,omitempty"`
	UpdatedBy       *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2ParentOrder struct {
	ID *int64 `json:"id,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2 struct {
	CanReprintPostage  *bool  `json:"canReprintPostage,omitempty"`
	Enabled            *bool  `json:"enabled,omitempty"`
	ID                 int64  `json:"id"`
	IncludePeripherals *bool  `json:"includePeripherals,omitempty"`
	InternalRatesOnly  *bool  `json:"internalRatesOnly,omitempty"`
	Name               string `json:"name"`
	RequiresDimensions *bool  `json:"requiresDimensions,omitempty"`
	Symbol             string `json:"symbol"`
}

type GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers struct {
	Carrier *GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2 `json:"carrier,omitempty"`
}

type GetOrders200ApplicationJSONOrderResponseV2WarehouseV2 struct {
	ID int64 `json:"id"`
}

// GetOrders200ApplicationJSONOrderResponseV2
// Requires hydrate to be set in the request and the corresponding node will be filled.
type GetOrders200ApplicationJSONOrderResponseV2 struct {
	CurrentStatus          GetOrders200ApplicationJSONOrderResponseV2StatusEventV2                                  `json:"currentStatus"`
	DepartDate             *time.Time                                                                               `json:"departDate,omitempty"`
	DispatchDate           *time.Time                                                                               `json:"dispatchDate,omitempty"`
	ID                     int64                                                                                    `json:"id"`
	Integrator             *string                                                                                  `json:"integrator,omitempty"`
	LineItems              []GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2                          `json:"lineItems,omitempty"`
	Merchant               GetOrders200ApplicationJSONOrderResponseV2MerchantV2                                     `json:"merchant"`
	MerchantOrderID        string                                                                                   `json:"merchantOrderId"`
	MerchantShippingMethod string                                                                                   `json:"merchantShippingMethod"`
	OriginalConsignee      GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2                                    `json:"originalConsignee"`
	ParentOrder            *GetOrders200ApplicationJSONOrderResponseV2ParentOrder                                   `json:"parentOrder,omitempty"`
	PurchaseOrderNum       *string                                                                                  `json:"purchaseOrderNum,omitempty"`
	RecordedOn             time.Time                                                                                `json:"recordedOn"`
	TrackingNumbers        []GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers                              `json:"trackingNumbers,omitempty"`
	ValidatedConsignee     shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"validatedConsignee"`
	Warehouse              *GetOrders200ApplicationJSONOrderResponseV2WarehouseV2                                   `json:"warehouse,omitempty"`
}

type GetOrdersRequest struct {
	QueryParams GetOrdersQueryParams
	Security    GetOrdersSecurity
}

type GetOrdersResponse struct {
	ContentType          string
	ErrorStandardV2      *GetOrdersErrorStandardV2
	OrderResponseOneOfV2 *interface{}
	StatusCode           int64
}
