package operations



type PatchBinIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PatchBinIDRequest struct {
    PathParams PatchBinIDPathParams 
    
}

type PatchBinIDResponse struct {
    ContentType string 
    Error *interface{} 
    StatusCode int64 
    UpdateStatus *interface{} 
    
}

