package operations

import (
"openapi/pkg/models/shared")

type GetOrdersQueryParams struct {
    FieldGroups *string `queryParam:"style=form,explode=true,name=fieldGroups"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OrderIds *string `queryParam:"style=form,explode=true,name=orderIds"`
    
}

type GetOrdersSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetOrdersRequest struct {
    QueryParams GetOrdersQueryParams 
    Security GetOrdersSecurity 
    
}

type GetOrdersResponse struct {
    ContentType string 
    OrderSearchPagedCollection *shared.OrderSearchPagedCollection 
    StatusCode int64 
    
}

