package shared

import (
	"time"
)

type OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2 struct {
	ActionRequiredBy *OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy `json:"actionRequiredBy,omitempty"`
	Code             string                                                                                           `json:"code"`
	Detail           *string                                                                                          `json:"detail,omitempty"`
	DetailCode       string                                                                                           `json:"detailCode"`
	ID               *int64                                                                                           `json:"id,omitempty"`
	IsClosed         *bool                                                                                            `json:"isClosed,omitempty"`
	Name             *string                                                                                          `json:"name,omitempty"`
	Reason           *string                                                                                          `json:"reason,omitempty"`
	Stage            OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage             `json:"stage"`
	State            OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State             `json:"state"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 struct {
	CreatedBy *OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy,omitempty"`
	Date      *time.Time                                                                                    `json:"date,omitempty"`
	ID        int64                                                                                         `json:"id"`
	Reason    *string                                                                                       `json:"reason,omitempty"`
	Status    *OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2              `json:"status,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2 struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 struct {
	ID   *int64  `json:"id,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Name *string `json:"name,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2 struct {
	Address1        string                                                                                        `json:"address1"`
	Address2        *string                                                                                       `json:"address2,omitempty"`
	AddressLocality string                                                                                        `json:"addressLocality"`
	AddressRegion   string                                                                                        `json:"addressRegion"`
	CompanyName     *string                                                                                       `json:"companyName,omitempty"`
	Country         string                                                                                        `json:"country"`
	Email           *string                                                                                       `json:"email,omitempty"`
	FirstName       string                                                                                        `json:"firstName"`
	ID              int64                                                                                         `json:"id"`
	Iso             *OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2                `json:"iso,omitempty"`
	LastName        string                                                                                        `json:"lastName"`
	Phone           *string                                                                                       `json:"phone,omitempty"`
	PostalCode      string                                                                                        `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                    `json:"updatedAt,omitempty"`
	UpdatedBy       *OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaParentOrder struct {
	ID *int64 `json:"id,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2 struct {
	ID int64 `json:"id"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 struct {
	BarcodeScanValue *string                                                                                `json:"barcodeScanValue,omitempty"`
	Carrier          *OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2 `json:"carrier,omitempty"`
	Value            *string                                                                                `json:"value,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2 struct {
	ID int64 `json:"id"`
}

type OneordersPostResponses201ContentApplication1jsonSchema struct {
	CurrentStatus          OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2               `json:"currentStatus"`
	DepartDate             *time.Time                                                                        `json:"departDate,omitempty"`
	DispatchDate           *time.Time                                                                        `json:"dispatchDate,omitempty"`
	ID                     int64                                                                             `json:"id"`
	Merchant               OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2                  `json:"merchant"`
	MerchantOrderID        string                                                                            `json:"merchantOrderId"`
	MerchantShippingMethod string                                                                            `json:"merchantShippingMethod"`
	OriginalConsignee      OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2                 `json:"originalConsignee"`
	ParentOrder            *OneordersPostResponses201ContentApplication1jsonSchemaParentOrder                `json:"parentOrder,omitempty"`
	PurchaseOrderNum       *string                                                                           `json:"purchaseOrderNum,omitempty"`
	RecordedOn             time.Time                                                                         `json:"recordedOn"`
	TrackingNumbers        []OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2          `json:"trackingNumbers,omitempty"`
	ValidatedConsignee     OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"validatedConsignee"`
	Warehouse              *OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2                `json:"warehouse,omitempty"`
}
