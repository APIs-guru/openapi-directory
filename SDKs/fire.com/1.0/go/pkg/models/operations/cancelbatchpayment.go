package operations



type CancelBatchPaymentPathParams struct {
    BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
    
}

type CancelBatchPaymentRequest struct {
    PathParams CancelBatchPaymentPathParams 
    
}

type CancelBatchPaymentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

