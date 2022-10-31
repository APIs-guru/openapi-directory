package operations

import (
"openapi/pkg/models/shared")

type GetUsersQueryParams struct {
    Blocked *bool `queryParam:"style=form,explode=true,name=blocked"`
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    Sort *shared.UsersSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    
}

type GetUsersSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetUsersRequest struct {
    QueryParams GetUsersQueryParams 
    Security GetUsersSecurity 
    
}

type GetUsersResponse struct {
    ContentType string 
    StatusCode int64 
    Users []interface{} 
    
}

