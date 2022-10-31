package operations



type GetContainersUsageHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type GetContainersUsageRequest struct {
    Headers GetContainersUsageHeaders 
    
}

type GetContainersUsageResponse struct {
    ContainersUsageInfo *interface{} 
    ContentType string 
    StatusCode int64 
    
}

