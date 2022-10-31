package operations



type DeleteBankTransferBatchPaymentPathParams struct {
    BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
    ItemUUID string `pathParam:"style=simple,explode=false,name=itemUuid"`
    
}

type DeleteBankTransferBatchPaymentRequest struct {
    PathParams DeleteBankTransferBatchPaymentPathParams 
    
}

type DeleteBankTransferBatchPaymentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

