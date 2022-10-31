package operations



type GetTransactionCostPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetTransactionCostRequest struct {
    PathParams GetTransactionCostPathParams 
    
}

type GetTransactionCostResponse struct {
    ContentType string 
    StatusCode int64 
    
}

