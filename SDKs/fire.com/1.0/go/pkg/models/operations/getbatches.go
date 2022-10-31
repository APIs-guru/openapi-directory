package operations

import (
"time")


type GetBatchesBatchStatusEnum string

const (
    GetBatchesBatchStatusEnumSubmitted GetBatchesBatchStatusEnum = "SUBMITTED"
GetBatchesBatchStatusEnumRemoved GetBatchesBatchStatusEnum = "REMOVED"
GetBatchesBatchStatusEnumSucceeded GetBatchesBatchStatusEnum = "SUCCEEDED"
GetBatchesBatchStatusEnumFailed GetBatchesBatchStatusEnum = "FAILED"
)



type GetBatchesBatchTypesEnum string

const (
    GetBatchesBatchTypesEnumInternalTransfer GetBatchesBatchTypesEnum = "INTERNAL_TRANSFER"
GetBatchesBatchTypesEnumBankTransfer GetBatchesBatchTypesEnum = "BANK_TRANSFER"
GetBatchesBatchTypesEnumNewPayee GetBatchesBatchTypesEnum = "NEW_PAYEE"
)



type GetBatchesOrderEnum string

const (
    GetBatchesOrderEnumDesc GetBatchesOrderEnum = "DESC"
GetBatchesOrderEnumAsc GetBatchesOrderEnum = "ASC"
)



type GetBatchesOrderByEnum string

const (
    GetBatchesOrderByEnumDate GetBatchesOrderByEnum = "DATE"
)


type GetBatchesQueryParams struct {
    BatchStatus *GetBatchesBatchStatusEnum `queryParam:"style=form,explode=true,name=batchStatus"`
    BatchTypes *GetBatchesBatchTypesEnum `queryParam:"style=form,explode=true,name=batchTypes"`
    Order *GetBatchesOrderEnum `queryParam:"style=form,explode=true,name=order"`
    OrderBy *GetBatchesOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
    
}

type GetBatchesRequest struct {
    QueryParams GetBatchesQueryParams 
    
}

type GetBatchesBatchItemsBatchItemResult struct {
    Code *int64 `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}


type GetBatchesBatchItemsBatchItemStatusEnum string

const (
    GetBatchesBatchItemsBatchItemStatusEnumSubmitted GetBatchesBatchItemsBatchItemStatusEnum = "SUBMITTED"
GetBatchesBatchItemsBatchItemStatusEnumRemoved GetBatchesBatchItemsBatchItemStatusEnum = "REMOVED"
GetBatchesBatchItemsBatchItemStatusEnumSucceeded GetBatchesBatchItemsBatchItemStatusEnum = "SUCCEEDED"
GetBatchesBatchItemsBatchItemStatusEnumFailed GetBatchesBatchItemsBatchItemStatusEnum = "FAILED"
)


type GetBatchesBatchItemsBatchItem struct {
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
    Result *GetBatchesBatchItemsBatchItemResult `json:"result,omitempty"`
    Status *GetBatchesBatchItemsBatchItemStatusEnum `json:"status,omitempty"`
    TaxAmount *int64 `json:"taxAmount,omitempty"`
    
}

type GetBatchesBatchItems struct {
    Items []GetBatchesBatchItemsBatchItem `json:"items,omitempty"`
    Total *int64 `json:"total,omitempty"`
    
}

type GetBatchesResponse struct {
    BatchItems *GetBatchesBatchItems 
    ContentType string 
    StatusCode int64 
    
}

