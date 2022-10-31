package operations

import (
"openapi/pkg/models/shared")


type GetMessagesSortOrderEnum string

const (
    GetMessagesSortOrderEnumAscending GetMessagesSortOrderEnum = "ASCENDING"
)


type GetMessagesQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Limit *float64 `queryParam:"style=form,explode=true,name=limit"`
    SortOrder *GetMessagesSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    
}

type GetMessagesSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type GetMessagesRequest struct {
    QueryParams GetMessagesQueryParams 
    Security GetMessagesSecurity 
    
}

type GetMessagesResponse struct {
    ContentType string 
    Error *shared.Error 
    Messages []shared.Message 
    StatusCode int64 
    
}

