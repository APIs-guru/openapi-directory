package operations

import (
"openapi/pkg/models/shared")

type FunctionsListTagsPathParams struct {
    FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
    
}

type FunctionsListTagsQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    OrderType *string `queryParam:"style=form,explode=true,name=orderType"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type FunctionsListTagsSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type FunctionsListTagsRequest struct {
    PathParams FunctionsListTagsPathParams 
    QueryParams FunctionsListTagsQueryParams 
    Security FunctionsListTagsSecurity 
    
}

type FunctionsListTagsResponse struct {
    ContentType string 
    StatusCode int64 
    TagList *shared.TagList 
    
}

