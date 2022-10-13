package shared

import (
	"time"
)

type OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult struct {
	Code    *int64  `json:"code"`
	Message *string `json:"message"`
}

type OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum string

const (
	OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnumSubmitted OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum = "SUBMITTED"
	OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnumRemoved   OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum = "REMOVED"
	OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnumSucceeded OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum = "SUCCEEDED"
	OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnumFailed    OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum = "FAILED"
)

type OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems struct {
	Amount             *int64                                                                                `json:"amount"`
	AmountAfterCharges *int64                                                                                `json:"amountAfterCharges"`
	BatchItemUUID      *string                                                                               `json:"batchItemUuid"`
	DateCreated        *time.Time                                                                            `json:"dateCreated"`
	FeeAmount          *int64                                                                                `json:"feeAmount"`
	IcanFrom           *int64                                                                                `json:"icanFrom"`
	IcanTo             *int64                                                                                `json:"icanTo"`
	LastUpdated        *time.Time                                                                            `json:"lastUpdated"`
	Ref                *string                                                                               `json:"ref"`
	RefID              *int64                                                                                `json:"refId"`
	Result             *OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult     `json:"result"`
	Status             *OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum `json:"status"`
	TaxAmount          *int64                                                                                `json:"taxAmount"`
}
