package operations



type DeleteInternalTransferBatchPaymentPathParams struct {
    BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
    ItemUUID string `pathParam:"style=simple,explode=false,name=itemUuid"`
    
}

type DeleteInternalTransferBatchPaymentRequest struct {
    PathParams DeleteInternalTransferBatchPaymentPathParams 
    
}

type DeleteInternalTransferBatchPaymentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

