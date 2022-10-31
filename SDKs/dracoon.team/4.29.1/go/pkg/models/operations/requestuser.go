package operations

import (
"openapi/pkg/models/shared")

type RequestUserPathParams struct {
    UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type RequestUserQueryParams struct {
    EffectiveRoles *bool `queryParam:"style=form,explode=true,name=effective_roles"`
    
}

type RequestUserHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type RequestUserRequest struct {
    PathParams RequestUserPathParams 
    QueryParams RequestUserQueryParams 
    Headers RequestUserHeaders 
    
}

type RequestUserResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UserData *shared.UserData 
    
}

