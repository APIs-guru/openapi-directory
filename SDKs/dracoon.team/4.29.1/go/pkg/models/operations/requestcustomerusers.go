package operations

import (
"openapi/pkg/models/shared")

type RequestCustomerUsersPathParams struct {
    CustomerID int64 `pathParam:"style=simple,explode=false,name=customer_id"`
    
}

type RequestCustomerUsersQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    IncludeAttributes *bool `queryParam:"style=form,explode=true,name=include_attributes"`
    IncludeManageableRooms *bool `queryParam:"style=form,explode=true,name=include_manageable_rooms"`
    IncludeRoles *bool `queryParam:"style=form,explode=true,name=include_roles"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type RequestCustomerUsersHeaders struct {
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    XSdsServiceToken *string `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
    
}

type RequestCustomerUsersRequest struct {
    PathParams RequestCustomerUsersPathParams 
    QueryParams RequestCustomerUsersQueryParams 
    Headers RequestCustomerUsersHeaders 
    
}

type RequestCustomerUsersResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UserList *shared.UserList 
    
}

