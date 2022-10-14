package shared

import (
	"time"
)

type OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusActionRequiredBy struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStage struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusState struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStatusTypeV2 struct {
	ActionRequiredBy *OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusActionRequiredBy `json:"actionRequiredBy,omitempty"`
	Code             string                                                                                     `json:"code"`
	Detail           *string                                                                                    `json:"detail,omitempty"`
	DetailCode       string                                                                                     `json:"detailCode"`
	ID               *int64                                                                                     `json:"id,omitempty"`
	IsClosed         *bool                                                                                      `json:"isClosed,omitempty"`
	Name             *string                                                                                    `json:"name,omitempty"`
	Reason           *string                                                                                    `json:"reason,omitempty"`
	Stage            OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStage             `json:"stage"`
	State            OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusState             `json:"state"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusEventV2 struct {
	CreatedBy *OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy,omitempty"`
	Date      *time.Time                                                                                    `json:"date,omitempty"`
	ID        int64                                                                                         `json:"id"`
	Reason    *string                                                                                       `json:"reason,omitempty"`
	Status    *OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusStatusTypeV2        `json:"status,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaMerchantMerchantV2 struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeIsoIsoCountryV2 struct {
	ID   *int64  `json:"id,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Name *string `json:"name,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeConsigneeV2 struct {
	Address1        string                                                                                        `json:"address1"`
	Address2        *string                                                                                       `json:"address2,omitempty"`
	AddressLocality string                                                                                        `json:"addressLocality"`
	AddressRegion   string                                                                                        `json:"addressRegion"`
	CompanyName     *string                                                                                       `json:"companyName,omitempty"`
	Country         string                                                                                        `json:"country"`
	Email           *string                                                                                       `json:"email,omitempty"`
	FirstName       string                                                                                        `json:"firstName"`
	ID              int64                                                                                         `json:"id"`
	Iso             *OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeIsoIsoCountryV2       `json:"iso,omitempty"`
	LastName        string                                                                                        `json:"lastName"`
	Phone           *string                                                                                       `json:"phone,omitempty"`
	PostalCode      string                                                                                        `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                    `json:"updatedAt,omitempty"`
	UpdatedBy       *OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaParentOrder struct {
	ID *int64 `json:"id,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersCarrierCarrierSimpleV2 struct {
	ID int64 `json:"id"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersTrackingNumberV2 struct {
	BarcodeScanValue *string                                                                                      `json:"barcodeScanValue,omitempty"`
	Carrier          *OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersCarrierCarrierSimpleV2 `json:"carrier,omitempty"`
	Value            *string                                                                                      `json:"value,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaWarehouseWarehouseV2 struct {
	ID int64 `json:"id"`
}

type OneordersPostResponses201ContentApplication1jsonSchema struct {
	CurrentStatus          OneordersPostResponses201ContentApplication1jsonSchemaCurrentStatusStatusEventV2        `json:"currentStatus"`
	DepartDate             *time.Time                                                                              `json:"departDate,omitempty"`
	DispatchDate           *time.Time                                                                              `json:"dispatchDate,omitempty"`
	ID                     int64                                                                                   `json:"id"`
	Merchant               OneordersPostResponses201ContentApplication1jsonSchemaMerchantMerchantV2                `json:"merchant"`
	MerchantOrderID        string                                                                                  `json:"merchantOrderId"`
	MerchantShippingMethod string                                                                                  `json:"merchantShippingMethod"`
	OriginalConsignee      OneordersPostResponses201ContentApplication1jsonSchemaOriginalConsigneeConsigneeV2      `json:"originalConsignee"`
	ParentOrder            *OneordersPostResponses201ContentApplication1jsonSchemaParentOrder                      `json:"parentOrder,omitempty"`
	PurchaseOrderNum       *string                                                                                 `json:"purchaseOrderNum,omitempty"`
	RecordedOn             time.Time                                                                               `json:"recordedOn"`
	TrackingNumbers        []OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumbersTrackingNumberV2 `json:"trackingNumbers,omitempty"`
	ValidatedConsignee     OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee       `json:"validatedConsignee"`
	Warehouse              *OneordersPostResponses201ContentApplication1jsonSchemaWarehouseWarehouseV2             `json:"warehouse,omitempty"`
}
