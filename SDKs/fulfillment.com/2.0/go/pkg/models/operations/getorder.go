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

type GetOrderRequest struct {
	PathParams  GetOrderPathParams
	QueryParams GetOrderQueryParams
	Security    GetOrderSecurity
}

type GetOrder200ApplicationJSON2CurrentStatusStatusActionRequiredBy struct {
	ID   *int64  `json:"id"`
	Name *string `json:"name"`
}

type GetOrder200ApplicationJSON2CurrentStatusStatusStage struct {
	Code *string `json:"code"`
	Name *string `json:"name"`
}

type GetOrder200ApplicationJSON2CurrentStatusStatusState struct {
	Code *string `json:"code"`
	Name *string `json:"name"`
}

type GetOrder200ApplicationJSON2CurrentStatusStatusStatusTypeV2 struct {
	ActionRequiredBy *GetOrder200ApplicationJSON2CurrentStatusStatusActionRequiredBy `json:"actionRequiredBy"`
	Code             string                                                          `json:"code"`
	Detail           *string                                                         `json:"detail"`
	DetailCode       string                                                          `json:"detailCode"`
	ID               *int64                                                          `json:"id"`
	IsClosed         *bool                                                           `json:"isClosed"`
	Name             *string                                                         `json:"name"`
	Reason           *string                                                         `json:"reason"`
	Stage            GetOrder200ApplicationJSON2CurrentStatusStatusStage             `json:"stage"`
	State            GetOrder200ApplicationJSON2CurrentStatusStatusState             `json:"state"`
}

type GetOrder200ApplicationJSON2CurrentStatusStatusEventV2 struct {
	CreatedBy *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy"`
	Date      *time.Time                                                                                           `json:"date"`
	ID        int64                                                                                                `json:"id"`
	Reason    *string                                                                                              `json:"reason"`
	Status    *GetOrder200ApplicationJSON2CurrentStatusStatusStatusTypeV2                                          `json:"status"`
}

type GetOrder200ApplicationJSON2LineItemsInventoryDetails struct {
	ExpirationDate *time.Time `json:"expirationDate"`
	LotNum         *string    `json:"lotNum"`
	Quantity       *int64     `json:"quantity"`
	SerialNum      *string    `json:"serialNum"`
}

type GetOrder200ApplicationJSON2LineItemsLineDetails struct {
	Description   *string `json:"description"`
	ExternalSku   *string `json:"externalSku"`
	ID            *int64  `json:"id"`
	Name          *string `json:"name"`
	TotalQuantity *int64  `json:"totalQuantity"`
}

type GetOrder200ApplicationJSON2LineItemsRequestedSkuData struct {
	DeclaredValue *string `json:"declaredValue"`
	ID            *int64  `json:"id"`
	Quantity      *int64  `json:"quantity"`
	Sku           *string `json:"sku"`
}

type GetOrder200ApplicationJSON2LineItemsLineItemsResponseV2 struct {
	ID               *int64                                                 `json:"id"`
	InventoryDetails []GetOrder200ApplicationJSON2LineItemsInventoryDetails `json:"inventoryDetails"`
	LineDetails      *GetOrder200ApplicationJSON2LineItemsLineDetails       `json:"lineDetails"`
	RequestedSkuData *GetOrder200ApplicationJSON2LineItemsRequestedSkuData  `json:"requestedSkuData"`
}

type GetOrder200ApplicationJSON2MerchantMerchantV2 struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type GetOrder200ApplicationJSON2OriginalConsigneeIsoIsoCountryV2 struct {
	ID   *int64  `json:"id"`
	Iso2 *string `json:"iso2"`
	Name *string `json:"name"`
}

type GetOrder200ApplicationJSON2OriginalConsigneeConsigneeV2 struct {
	Address1        string                                                                                               `json:"address1"`
	Address2        *string                                                                                              `json:"address2"`
	AddressLocality string                                                                                               `json:"addressLocality"`
	AddressRegion   string                                                                                               `json:"addressRegion"`
	CompanyName     *string                                                                                              `json:"companyName"`
	Country         string                                                                                               `json:"country"`
	Email           *string                                                                                              `json:"email"`
	FirstName       string                                                                                               `json:"firstName"`
	ID              int64                                                                                                `json:"id"`
	Iso             *GetOrder200ApplicationJSON2OriginalConsigneeIsoIsoCountryV2                                         `json:"iso"`
	LastName        string                                                                                               `json:"lastName"`
	Phone           *string                                                                                              `json:"phone"`
	PostalCode      string                                                                                               `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                           `json:"updatedAt"`
	UpdatedBy       *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy"`
}

type GetOrder200ApplicationJSON2ParentOrder struct {
	ID *int64 `json:"id"`
}

type GetOrder200ApplicationJSON2TrackingNumbersCarrierCarrierHydratedV2 struct {
	CanReprintPostage  *bool  `json:"canReprintPostage"`
	Enabled            *bool  `json:"enabled"`
	ID                 int64  `json:"id"`
	IncludePeripherals *bool  `json:"includePeripherals"`
	InternalRatesOnly  *bool  `json:"internalRatesOnly"`
	Name               string `json:"name"`
	RequiresDimensions *bool  `json:"requiresDimensions"`
	Symbol             string `json:"symbol"`
}

type GetOrder200ApplicationJSON2TrackingNumbers struct {
	Carrier *GetOrder200ApplicationJSON2TrackingNumbersCarrierCarrierHydratedV2 `json:"carrier"`
}

type GetOrder200ApplicationJSON2WarehouseWarehouseV2 struct {
	ID int64 `json:"id"`
}

type GetOrder200ApplicationJSON2 struct {
	CurrentStatus          GetOrder200ApplicationJSON2CurrentStatusStatusEventV2                                    `json:"currentStatus"`
	DepartDate             *time.Time                                                                               `json:"departDate"`
	DispatchDate           *time.Time                                                                               `json:"dispatchDate"`
	ID                     int64                                                                                    `json:"id"`
	Integrator             *string                                                                                  `json:"integrator"`
	LineItems              []GetOrder200ApplicationJSON2LineItemsLineItemsResponseV2                                `json:"lineItems"`
	Merchant               GetOrder200ApplicationJSON2MerchantMerchantV2                                            `json:"merchant"`
	MerchantOrderID        string                                                                                   `json:"merchantOrderId"`
	MerchantShippingMethod string                                                                                   `json:"merchantShippingMethod"`
	OriginalConsignee      GetOrder200ApplicationJSON2OriginalConsigneeConsigneeV2                                  `json:"originalConsignee"`
	ParentOrder            *GetOrder200ApplicationJSON2ParentOrder                                                  `json:"parentOrder"`
	PurchaseOrderNum       *string                                                                                  `json:"purchaseOrderNum"`
	RecordedOn             time.Time                                                                                `json:"recordedOn"`
	TrackingNumbers        []GetOrder200ApplicationJSON2TrackingNumbers                                             `json:"trackingNumbers"`
	ValidatedConsignee     shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"validatedConsignee"`
	Warehouse              *GetOrder200ApplicationJSON2WarehouseWarehouseV2                                         `json:"warehouse"`
}

type GetOrderResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	OneordersGetResponses200ContentApplication1jsonSchema *interface{}
}
