package operations

import (
"openapi/pkg/models/shared")

type RequestMissingFileKeysQueryParams struct {
    FileID *int64 `queryParam:"style=form,explode=true,name=file_id"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    RoomID *int64 `queryParam:"style=form,explode=true,name=room_id"`
    UseKey *interface{} `queryParam:"style=form,explode=true,name=use_key"`
    UserID *int64 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type RequestMissingFileKeysHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestMissingFileKeysRequest struct {
    QueryParams RequestMissingFileKeysQueryParams 
    Headers RequestMissingFileKeysHeaders 
    
}

type RequestMissingFileKeysResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    MissingKeysResponse *shared.MissingKeysResponse 
    StatusCode int64 
    
}

