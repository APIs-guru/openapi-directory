package operations

import (
"openapi/pkg/models/shared")

type FunctionsListQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    OrderType *string `queryParam:"style=form,explode=true,name=orderType"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type FunctionsListSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type FunctionsListRequest struct {
    QueryParams FunctionsListQueryParams 
    Security FunctionsListSecurity 
    
}

type FunctionsListResponse struct {
    ContentType string 
    StatusCode int64 
    FunctionList *shared.FunctionList 
    
}

