package operations

import (
"openapi/pkg/models/shared")

type RequestCustomersQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    IncludeAttributes *bool `queryParam:"style=form,explode=true,name=include_attributes"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type RequestCustomersHeaders struct {
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    XSdsServiceToken *string `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
    
}

type RequestCustomersRequest struct {
    QueryParams RequestCustomersQueryParams 
    Headers RequestCustomersHeaders 
    
}

type RequestCustomersResponse struct {
    ContentType string 
    CustomerList *shared.CustomerList 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

