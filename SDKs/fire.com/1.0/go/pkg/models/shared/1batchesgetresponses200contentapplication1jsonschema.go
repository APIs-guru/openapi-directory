package shared

import (
	"time"
)

type OnebatchesGetResponses200ContentApplication1jsonSchemaItemsResult struct {
	Code    *int64  `json:"code"`
	Message *string `json:"message"`
}

type OnebatchesGetResponses200ContentApplication1jsonSchemaItemsStatusEnum string

const (
	OnebatchesGetResponses200ContentApplication1jsonSchemaItemsStatusEnumSubmitted OnebatchesGetResponses200ContentApplication1jsonSchemaItemsStatusEnum = "SUBMITTED"
	OnebatchesGetResponses200ContentApplication1jsonSchemaItemsStatusEnumRemoved   OnebatchesGetResponses200ContentApplication1jsonSchemaItemsStatusEnum = "REMOVED"
	OnebatchesGetResponses200ContentApplication1jsonSchemaItemsStatusEnumSucceeded OnebatchesGetResponses200ContentApplication1jsonSchemaItemsStatusEnum = "SUCCEEDED"
	OnebatchesGetResponses200ContentApplication1jsonSchemaItemsStatusEnumFailed    OnebatchesGetResponses200ContentApplication1jsonSchemaItemsStatusEnum = "FAILED"
)

type OnebatchesGetResponses200ContentApplication1jsonSchemaItemsBatchItem struct {
	Amount             *int64                                                                 `json:"amount"`
	AmountAfterCharges *int64                                                                 `json:"amountAfterCharges"`
	BatchItemUUID      *string                                                                `json:"batchItemUuid"`
	DateCreated        *time.Time                                                             `json:"dateCreated"`
	FeeAmount          *int64                                                                 `json:"feeAmount"`
	IcanFrom           *int64                                                                 `json:"icanFrom"`
	IcanTo             *int64                                                                 `json:"icanTo"`
	LastUpdated        *time.Time                                                             `json:"lastUpdated"`
	Ref                *string                                                                `json:"ref"`
	RefID              *int64                                                                 `json:"refId"`
	Result             *OnebatchesGetResponses200ContentApplication1jsonSchemaItemsResult     `json:"result"`
	Status             *OnebatchesGetResponses200ContentApplication1jsonSchemaItemsStatusEnum `json:"status"`
	TaxAmount          *int64                                                                 `json:"taxAmount"`
}

type OnebatchesGetResponses200ContentApplication1jsonSchema struct {
	Items []OnebatchesGetResponses200ContentApplication1jsonSchemaItemsBatchItem `json:"items"`
	Total *int64                                                                 `json:"total"`
}
