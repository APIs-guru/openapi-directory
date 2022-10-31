package operations

import (
"openapi/pkg/models/shared")

type UsersListQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    OrderType *string `queryParam:"style=form,explode=true,name=orderType"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type UsersListSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsersListRequest struct {
    QueryParams UsersListQueryParams 
    Security UsersListSecurity 
    
}

type UsersListResponse struct {
    ContentType string 
    StatusCode int64 
    UserList *shared.UserList 
    
}

