package shared

import (
"time")

type OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult struct {
    Code *int64 `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}


type OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum string

const (
    OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnumSubmitted OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum = "SUBMITTED"
OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnumRemoved OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum = "REMOVED"
OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnumSucceeded OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum = "SUCCEEDED"
OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnumFailed OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum = "FAILED"
)


type OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem struct {
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
    Result *OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult `json:"result,omitempty"`
    Status *OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum `json:"status,omitempty"`
    TaxAmount *int64 `json:"taxAmount,omitempty"`
    
}

type OnebatchesGetResponses200ContentApplication1jsonSchema struct {
    Items []OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem `json:"items,omitempty"`
    Total *int64 `json:"total,omitempty"`
    
}

