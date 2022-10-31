package operations



type PutContainersQuotaHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type PutContainersQuotaRequest struct {
    Headers PutContainersQuotaHeaders 
    Request interface{} `request:"mediaType=application/json"`
    
}

type PutContainersQuotaResponse struct {
    ContentType string 
    StatusCode int64 
    
}

