package operations



type OptionsContractIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type OptionsContractIDRequest struct {
    PathParams OptionsContractIDPathParams 
    
}

type OptionsContractIDResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

