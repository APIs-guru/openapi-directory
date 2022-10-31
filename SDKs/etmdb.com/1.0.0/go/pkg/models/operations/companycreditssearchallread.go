package operations



type CompanyCreditsSearchallReadPathParams struct {
    Param string `pathParam:"style=simple,explode=false,name=param"`
    
}

type CompanyCreditsSearchallReadRequest struct {
    PathParams CompanyCreditsSearchallReadPathParams 
    
}

type CompanyCreditsSearchallReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

