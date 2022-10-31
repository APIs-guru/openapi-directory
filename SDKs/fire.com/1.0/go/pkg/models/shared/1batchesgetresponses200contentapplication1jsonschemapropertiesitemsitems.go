package shared

import (
"time")

type OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult struct {
    Code *int64 `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}


type OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum string

const (
    OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnumSubmitted OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum = "SUBMITTED"
OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnumRemoved OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum = "REMOVED"
OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnumSucceeded OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum = "SUCCEEDED"
OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnumFailed OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum = "FAILED"
)


type OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems struct {
    Amount *int64 `json:"amount,omitempty"`
    AmountAfterCharges *int64 `json:"amountAfterCharges,omitempty"`
    BatchItemUUID *string `json:"batchItemUuid,omitempty"`
    DateCreated *time.Time `json:"dateCreated,omitempty"`
    FeeAmount *int64 `json:"feeAmount,omitempty"`
    IcanFrom *int64 `json:"icanFrom,omitempty"`
    IcanTo *int64 `json:"icanTo,omitempty"`
    LastUpdated *time.Time `json:"lastUpdated,omitempty"`
    Ref *string `json:"ref,omitempty"`
    RefID *int64 `json:"refId,omitempty"`
    Result *OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult `json:"result,omitempty"`
    Status *OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum `json:"status,omitempty"`
    TaxAmount *int64 `json:"taxAmount,omitempty"`
    
}

