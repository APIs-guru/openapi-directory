package operations

import (
"openapi/pkg/models/shared")

type RequestUserAttributesPathParams struct {
    UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type RequestUserAttributesQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type RequestUserAttributesHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestUserAttributesRequest struct {
    PathParams RequestUserAttributesPathParams 
    QueryParams RequestUserAttributesQueryParams 
    Headers RequestUserAttributesHeaders 
    
}

type RequestUserAttributesResponse struct {
    AttributesResponse *shared.AttributesResponse 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

