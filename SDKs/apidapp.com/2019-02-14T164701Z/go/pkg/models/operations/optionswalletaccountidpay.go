package operations



type OptionsWalletAccountIDPayPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type OptionsWalletAccountIDPayRequest struct {
    PathParams OptionsWalletAccountIDPayPathParams 
    
}

type OptionsWalletAccountIDPayResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

