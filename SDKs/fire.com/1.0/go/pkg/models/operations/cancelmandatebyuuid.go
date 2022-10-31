package operations



type CancelMandateByUUIDPathParams struct {
    MandateUUID string `pathParam:"style=simple,explode=false,name=mandateUuid"`
    
}

type CancelMandateByUUIDRequest struct {
    PathParams CancelMandateByUUIDPathParams 
    
}

type CancelMandateByUUIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

