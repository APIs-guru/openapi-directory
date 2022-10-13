package shared

import (
	"time"
)

type OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusActionRequiredBy struct {
	ID   *int64  `json:"id"`
	Name *string `json:"name"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStage struct {
	Code *string `json:"code"`
	Name *string `json:"name"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusState struct {
	Code *string `json:"code"`
	Name *string `json:"name"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStatusTypeV2 struct {
	ActionRequiredBy *OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusActionRequiredBy `json:"actionRequiredBy"`
	Code             string                                                                                     `json:"code"`
	Detail           *string                                                                                    `json:"detail"`
	DetailCode       string                                                                                     `json:"detailCode"`
	ID               *int64                                                                                     `json:"id"`
	IsClosed         *bool                                                                                      `json:"isClosed"`
	Name             *string                                                                                    `json:"name"`
	Reason           *string                                                                                    `json:"reason"`
	Stage            OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStage             `json:"stage"`
	State            OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusState             `json:"state"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusEventV2 struct {
	CreatedBy *OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy"`
	Date      *time.Time                                                                                    `json:"date"`
	ID        int64                                                                                         `json:"id"`
	Reason    *string                                                                                       `json:"reason"`
	Status    *OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStatusTypeV2        `json:"status"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaMerchantMerchantV2 struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeIsoIsoCountryV2 struct {
	ID   *int64  `json:"id"`
	Iso2 *string `json:"iso2"`
	Name *string `json:"name"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeConsigneeV2 struct {
	Address1        string                                                                                        `json:"address1"`
	Address2        *string                                                                                       `json:"address2"`
	AddressLocality string                                                                                        `json:"addressLocality"`
	AddressRegion   string                                                                                        `json:"addressRegion"`
	CompanyName     *string                                                                                       `json:"companyName"`
	Country         string                                                                                        `json:"country"`
	Email           *string                                                                                       `json:"email"`
	FirstName       string                                                                                        `json:"firstName"`
	ID              int64                                                                                         `json:"id"`
	Iso             *OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeIsoIsoCountryV2       `json:"iso"`
	LastName        string                                                                                        `json:"lastName"`
	Phone           *string                                                                                       `json:"phone"`
	PostalCode      string                                                                                        `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                    `json:"updatedAt"`
	UpdatedBy       *OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaParentOrder struct {
	ID *int64 `json:"id"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersCarrierCarrierSimpleV2 struct {
	ID int64 `json:"id"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersTrackingNumberV2 struct {
	BarcodeScanValue *string                                                                                      `json:"barcodeScanValue"`
	Carrier          *OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersCarrierCarrierSimpleV2 `json:"carrier"`
	Value            *string                                                                                      `json:"value"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaWarehouseWarehouseV2 struct {
	ID int64 `json:"id"`
}

type OneordersPostResponses201ContentApplication1jsonSchema struct {
	CurrentStatus          OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusEventV2        `json:"currentStatus"`
	DepartDate             *time.Time                                                                              `json:"departDate"`
	DispatchDate           *time.Time                                                                              `json:"dispatchDate"`
	ID                     int64                                                                                   `json:"id"`
	Merchant               OneordersPostResponses201ContentApplication1jsonSchemaMerchantMerchantV2                `json:"merchant"`
	MerchantOrderID        string                                                                                  `json:"merchantOrderId"`
	MerchantShippingMethod string                                                                                  `json:"merchantShippingMethod"`
	OriginalConsignee      OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeConsigneeV2      `json:"originalConsignee"`
	ParentOrder            *OneordersPostResponses201ContentApplication1jsonSchemaParentOrder                      `json:"parentOrder"`
	PurchaseOrderNum       *string                                                                                 `json:"purchaseOrderNum"`
	RecordedOn             time.Time                                                                               `json:"recordedOn"`
	TrackingNumbers        []OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersTrackingNumberV2 `json:"trackingNumbers"`
	ValidatedConsignee     OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee       `json:"validatedConsignee"`
	Warehouse              *OneordersPostResponses201ContentApplication1jsonSchemaWarehouseWarehouseV2             `json:"warehouse"`
}
