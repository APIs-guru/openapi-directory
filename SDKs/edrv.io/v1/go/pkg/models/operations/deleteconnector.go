package operations



type DeleteConnectorPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteConnectorRequest struct {
    PathParams DeleteConnectorPathParams 
    
}

type DeleteConnectorResponse struct {
    ContentType string 
    StatusCode int64 
    
}

