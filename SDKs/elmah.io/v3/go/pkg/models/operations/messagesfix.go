package operations



type MessagesFixPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    LogID string `pathParam:"style=simple,explode=false,name=logId"`
    
}

type MessagesFixQueryParams struct {
    MarkAllAsFixed *bool `queryParam:"style=form,explode=true,name=markAllAsFixed"`
    
}

type MessagesFixRequest struct {
    PathParams MessagesFixPathParams 
    QueryParams MessagesFixQueryParams 
    
}

type MessagesFixResponse struct {
    ContentType string 
    StatusCode int64 
    
}

