package operations



type PostWalletAccountIDPayPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostWalletAccountIDPayRequest struct {
    PathParams PostWalletAccountIDPayPathParams 
    
}

type PostWalletAccountIDPayResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

