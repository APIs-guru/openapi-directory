package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetOrderPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetOrderQueryParams struct {
	Hydrate    []shared.HydrateParamEnum `queryParam:"style=form,explode=false,name=hydrate"`
	MerchantID *int64                    `queryParam:"style=form,explode=true,name=merchantId"`
}

type GetOrderSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

// GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
// Responsibility for resolving this issue
type GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2 struct {
	ActionRequiredBy *GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy `json:"actionRequiredBy,omitempty"`
	Code             string                                                                              `json:"code"`
	Detail           *string                                                                             `json:"detail,omitempty"`
	DetailCode       string                                                                              `json:"detailCode"`
	ID               *int64                                                                              `json:"id,omitempty"`
	IsClosed         *bool                                                                               `json:"isClosed,omitempty"`
	Name             *string                                                                             `json:"name,omitempty"`
	Reason           *string                                                                             `json:"reason,omitempty"`
	Stage            GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage             `json:"stage"`
	State            GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State             `json:"state"`
}

type GetOrder200ApplicationJSONOrderResponseV2StatusEventV2 struct {
	CreatedBy *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy,omitempty"`
	Date      *time.Time                                                                                           `json:"date,omitempty"`
	ID        int64                                                                                                `json:"id"`
	Reason    *string                                                                                              `json:"reason,omitempty"`
	Status    *GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2                                  `json:"status,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails struct {
	ExpirationDate *time.Time `json:"expirationDate,omitempty"`
	LotNum         *string    `json:"lotNum,omitempty"`
	Quantity       *int64     `json:"quantity,omitempty"`
	SerialNum      *string    `json:"serialNum,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails struct {
	Description   *string `json:"description,omitempty"`
	ExternalSku   *string `json:"externalSku,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Name          *string `json:"name,omitempty"`
	TotalQuantity *int64  `json:"totalQuantity,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData struct {
	DeclaredValue *string `json:"declaredValue,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Quantity      *int64  `json:"quantity,omitempty"`
	Sku           *string `json:"sku,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2 struct {
	ID               *int64                                                                         `json:"id,omitempty"`
	InventoryDetails []GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails `json:"inventoryDetails,omitempty"`
	LineDetails      *GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails       `json:"lineDetails,omitempty"`
	RequestedSkuData *GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData  `json:"requestedSkuData,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2MerchantV2 struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2 struct {
	ID   *int64  `json:"id,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2 struct {
	Address1        string                                                                                               `json:"address1"`
	Address2        *string                                                                                              `json:"address2,omitempty"`
	AddressLocality string                                                                                               `json:"addressLocality"`
	AddressRegion   string                                                                                               `json:"addressRegion"`
	CompanyName     *string                                                                                              `json:"companyName,omitempty"`
	Country         string                                                                                               `json:"country"`
	Email           *string                                                                                              `json:"email,omitempty"`
	FirstName       string                                                                                               `json:"firstName"`
	ID              int64                                                                                                `json:"id"`
	Iso             *GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2                                    `json:"iso,omitempty"`
	LastName        string                                                                                               `json:"lastName"`
	Phone           *string                                                                                              `json:"phone,omitempty"`
	PostalCode      string                                                                                               `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                           `json:"updatedAt,omitempty"`
	UpdatedBy       *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2ParentOrder struct {
	ID *int64 `json:"id,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2 struct {
	CanReprintPostage  *bool  `json:"canReprintPostage,omitempty"`
	Enabled            *bool  `json:"enabled,omitempty"`
	ID                 int64  `json:"id"`
	IncludePeripherals *bool  `json:"includePeripherals,omitempty"`
	InternalRatesOnly  *bool  `json:"internalRatesOnly,omitempty"`
	Name               string `json:"name"`
	RequiresDimensions *bool  `json:"requiresDimensions,omitempty"`
	Symbol             string `json:"symbol"`
}

type GetOrder200ApplicationJSONOrderResponseV2TrackingNumbers struct {
	Carrier *GetOrder200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2 `json:"carrier,omitempty"`
}

type GetOrder200ApplicationJSONOrderResponseV2WarehouseV2 struct {
	ID int64 `json:"id"`
}

// GetOrder200ApplicationJSONOrderResponseV2
// Requires hydrate to be set in the request and the corresponding node will be filled.
type GetOrder200ApplicationJSONOrderResponseV2 struct {
	CurrentStatus          GetOrder200ApplicationJSONOrderResponseV2StatusEventV2                                   `json:"currentStatus"`
	DepartDate             *time.Time                                                                               `json:"departDate,omitempty"`
	DispatchDate           *time.Time                                                                               `json:"dispatchDate,omitempty"`
	ID                     int64                                                                                    `json:"id"`
	Integrator             *string                                                                                  `json:"integrator,omitempty"`
	LineItems              []GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2                           `json:"lineItems,omitempty"`
	Merchant               GetOrder200ApplicationJSONOrderResponseV2MerchantV2                                      `json:"merchant"`
	MerchantOrderID        string                                                                                   `json:"merchantOrderId"`
	MerchantShippingMethod string                                                                                   `json:"merchantShippingMethod"`
	OriginalConsignee      GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2                                     `json:"originalConsignee"`
	ParentOrder            *GetOrder200ApplicationJSONOrderResponseV2ParentOrder                                    `json:"parentOrder,omitempty"`
	PurchaseOrderNum       *string                                                                                  `json:"purchaseOrderNum,omitempty"`
	RecordedOn             time.Time                                                                                `json:"recordedOn"`
	TrackingNumbers        []GetOrder200ApplicationJSONOrderResponseV2TrackingNumbers                               `json:"trackingNumbers,omitempty"`
	ValidatedConsignee     shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"validatedConsignee"`
	Warehouse              *GetOrder200ApplicationJSONOrderResponseV2WarehouseV2                                    `json:"warehouse,omitempty"`
}

type GetOrderRequest struct {
	PathParams  GetOrderPathParams
	QueryParams GetOrderQueryParams
	Security    GetOrderSecurity
}

type GetOrderResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	OneordersGetResponses200ContentApplication1jsonSchema *interface{}
}
