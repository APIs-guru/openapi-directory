package operations

type DeleteUserHostedPropertyValuePathParams struct {
	AppKey       string `pathParam:"style=simple,explode=false,name=app_key"`
	PropertyName string `pathParam:"style=simple,explode=false,name=property_name"`
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
}

type DeleteUserHostedPropertyValueRequest struct {
	PathParams DeleteUserHostedPropertyValuePathParams
}

type DeleteUserHostedPropertyValueResponse struct {
	ContentType string
	StatusCode  int64
}
