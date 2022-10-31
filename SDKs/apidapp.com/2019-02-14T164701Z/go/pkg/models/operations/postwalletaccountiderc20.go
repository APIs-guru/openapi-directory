package operations



type PostWalletAccountIDErc20PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostWalletAccountIDErc20Request struct {
    PathParams PostWalletAccountIDErc20PathParams 
    
}

type PostWalletAccountIDErc20Response struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

