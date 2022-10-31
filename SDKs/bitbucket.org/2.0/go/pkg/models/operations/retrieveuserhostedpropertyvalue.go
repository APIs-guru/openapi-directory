package operations



type RetrieveUserHostedPropertyValuePathParams struct {
    AppKey string `pathParam:"style=simple,explode=false,name=app_key"`
    PropertyName string `pathParam:"style=simple,explode=false,name=property_name"`
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    
}

type RetrieveUserHostedPropertyValueRequest struct {
    PathParams RetrieveUserHostedPropertyValuePathParams 
    
}

type RetrieveUserHostedPropertyValueResponse struct {
    ContentType string 
    StatusCode int64 
    
}

