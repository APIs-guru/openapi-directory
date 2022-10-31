package operations



type UpdateUserHostedPropertyValuePathParams struct {
    AppKey string `pathParam:"style=simple,explode=false,name=app_key"`
    PropertyName string `pathParam:"style=simple,explode=false,name=property_name"`
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    
}

type UpdateUserHostedPropertyValueRequest struct {
    PathParams UpdateUserHostedPropertyValuePathParams 
    
}

type UpdateUserHostedPropertyValueResponse struct {
    ContentType string 
    StatusCode int64 
    
}

