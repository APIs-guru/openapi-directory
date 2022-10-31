package operations



type GetRawBrandFranchisesPathParams struct {
    Pid string `pathParam:"style=simple,explode=false,name=pid"`
    
}

type GetRawBrandFranchisesRequest struct {
    PathParams GetRawBrandFranchisesPathParams 
    
}

type GetRawBrandFranchisesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Nitro *interface{} 
    
}

