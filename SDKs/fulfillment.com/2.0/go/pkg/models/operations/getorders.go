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
	Message *string `json:"message"`
}

type GetOrders200ApplicationJSON2CurrentStatusStatusActionRequiredBy struct {
	ID   *int64  `json:"id"`
	Name *string `json:"name"`
}

type GetOrders200ApplicationJSON2CurrentStatusStatusStage struct {
	Code *string `json:"code"`
	Name *string `json:"name"`
}

type GetOrders200ApplicationJSON2CurrentStatusStatusState struct {
	Code *string `json:"code"`
	Name *string `json:"name"`
}

type GetOrders200ApplicationJSON2CurrentStatusStatusStatusTypeV2 struct {
	ActionRequiredBy *GetOrders200ApplicationJSON2CurrentStatusStatusActionRequiredBy `json:"actionRequiredBy"`
	Code             string                                                           `json:"code"`
	Detail           *string                                                          `json:"detail"`
	DetailCode       string                                                           `json:"detailCode"`
	ID               *int64                                                           `json:"id"`
	IsClosed         *bool                                                            `json:"isClosed"`
	Name             *string                                                          `json:"name"`
	Reason           *string                                                          `json:"reason"`
	Stage            GetOrders200ApplicationJSON2CurrentStatusStatusStage             `json:"stage"`
	State            GetOrders200ApplicationJSON2CurrentStatusStatusState             `json:"state"`
}

type GetOrders200ApplicationJSON2CurrentStatusStatusEventV2 struct {
	CreatedBy *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy"`
	Date      *time.Time                                                                                           `json:"date"`
	ID        int64                                                                                                `json:"id"`
	Reason    *string                                                                                              `json:"reason"`
	Status    *GetOrders200ApplicationJSON2CurrentStatusStatusStatusTypeV2                                         `json:"status"`
}

type GetOrders200ApplicationJSON2LineItemsInventoryDetails struct {
	ExpirationDate *time.Time `json:"expirationDate"`
	LotNum         *string    `json:"lotNum"`
	Quantity       *int64     `json:"quantity"`
	SerialNum      *string    `json:"serialNum"`
}

type GetOrders200ApplicationJSON2LineItemsLineDetails struct {
	Description   *string `json:"description"`
	ExternalSku   *string `json:"externalSku"`
	ID            *int64  `json:"id"`
	Name          *string `json:"name"`
	TotalQuantity *int64  `json:"totalQuantity"`
}

type GetOrders200ApplicationJSON2LineItemsRequestedSkuData struct {
	DeclaredValue *string `json:"declaredValue"`
	ID            *int64  `json:"id"`
	Quantity      *int64  `json:"quantity"`
	Sku           *string `json:"sku"`
}

type GetOrders200ApplicationJSON2LineItemsLineItemsResponseV2 struct {
	ID               *int64                                                  `json:"id"`
	InventoryDetails []GetOrders200ApplicationJSON2LineItemsInventoryDetails `json:"inventoryDetails"`
	LineDetails      *GetOrders200ApplicationJSON2LineItemsLineDetails       `json:"lineDetails"`
	RequestedSkuData *GetOrders200ApplicationJSON2LineItemsRequestedSkuData  `json:"requestedSkuData"`
}

type GetOrders200ApplicationJSON2MerchantMerchantV2 struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type GetOrders200ApplicationJSON2OriginalConsigneeIsoIsoCountryV2 struct {
	ID   *int64  `json:"id"`
	Iso2 *string `json:"iso2"`
	Name *string `json:"name"`
}

type GetOrders200ApplicationJSON2OriginalConsigneeConsigneeV2 struct {
	Address1        string                                                                                               `json:"address1"`
	Address2        *string                                                                                              `json:"address2"`
	AddressLocality string                                                                                               `json:"addressLocality"`
	AddressRegion   string                                                                                               `json:"addressRegion"`
	CompanyName     *string                                                                                              `json:"companyName"`
	Country         string                                                                                               `json:"country"`
	Email           *string                                                                                              `json:"email"`
	FirstName       string                                                                                               `json:"firstName"`
	ID              int64                                                                                                `json:"id"`
	Iso             *GetOrders200ApplicationJSON2OriginalConsigneeIsoIsoCountryV2                                        `json:"iso"`
	LastName        string                                                                                               `json:"lastName"`
	Phone           *string                                                                                              `json:"phone"`
	PostalCode      string                                                                                               `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                           `json:"updatedAt"`
	UpdatedBy       *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy"`
}

type GetOrders200ApplicationJSON2ParentOrder struct {
	ID *int64 `json:"id"`
}

type GetOrders200ApplicationJSON2TrackingNumbersCarrierCarrierHydratedV2 struct {
	CanReprintPostage  *bool  `json:"canReprintPostage"`
	Enabled            *bool  `json:"enabled"`
	ID                 int64  `json:"id"`
	IncludePeripherals *bool  `json:"includePeripherals"`
	InternalRatesOnly  *bool  `json:"internalRatesOnly"`
	Name               string `json:"name"`
	RequiresDimensions *bool  `json:"requiresDimensions"`
	Symbol             string `json:"symbol"`
}

type GetOrders200ApplicationJSON2TrackingNumbers struct {
	Carrier *GetOrders200ApplicationJSON2TrackingNumbersCarrierCarrierHydratedV2 `json:"carrier"`
}

type GetOrders200ApplicationJSON2WarehouseWarehouseV2 struct {
	ID int64 `json:"id"`
}

type GetOrders200ApplicationJSON2 struct {
	CurrentStatus          GetOrders200ApplicationJSON2CurrentStatusStatusEventV2                                   `json:"currentStatus"`
	DepartDate             *time.Time                                                                               `json:"departDate"`
	DispatchDate           *time.Time                                                                               `json:"dispatchDate"`
	ID                     int64                                                                                    `json:"id"`
	Integrator             *string                                                                                  `json:"integrator"`
	LineItems              []GetOrders200ApplicationJSON2LineItemsLineItemsResponseV2                               `json:"lineItems"`
	Merchant               GetOrders200ApplicationJSON2MerchantMerchantV2                                           `json:"merchant"`
	MerchantOrderID        string                                                                                   `json:"merchantOrderId"`
	MerchantShippingMethod string                                                                                   `json:"merchantShippingMethod"`
	OriginalConsignee      GetOrders200ApplicationJSON2OriginalConsigneeConsigneeV2                                 `json:"originalConsignee"`
	ParentOrder            *GetOrders200ApplicationJSON2ParentOrder                                                 `json:"parentOrder"`
	PurchaseOrderNum       *string                                                                                  `json:"purchaseOrderNum"`
	RecordedOn             time.Time                                                                                `json:"recordedOn"`
	TrackingNumbers        []GetOrders200ApplicationJSON2TrackingNumbers                                            `json:"trackingNumbers"`
	ValidatedConsignee     shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"validatedConsignee"`
	Warehouse              *GetOrders200ApplicationJSON2WarehouseWarehouseV2                                        `json:"warehouse"`
}

type GetOrdersResponse struct {
	ContentType          string
	ErrorStandardV2      *GetOrders404ApplicationJSONErrorStandardV2
	OrderResponseOneOfV2 *interface{}
	StatusCode           int64
}
