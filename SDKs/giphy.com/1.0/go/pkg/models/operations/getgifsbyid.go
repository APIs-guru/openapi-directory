package operations

import (
"openapi/pkg/models/shared")

type GetGifsByIDQueryParams struct {
    Ids *string `queryParam:"style=form,explode=true,name=ids"`
    
}

type GetGifsByIDRequest struct {
    QueryParams GetGifsByIDQueryParams 
    
}

type GetGifsByID200ApplicationJSON struct {
    Data []shared.Gif `json:"data,omitempty"`
    Meta *shared.Meta `json:"meta,omitempty"`
    Pagination *shared.Pagination `json:"pagination,omitempty"`
    
}

type GetGifsByIDResponse struct {
    ContentType string 
    StatusCode int64 
    GetGifsByID200ApplicationJSONObject *GetGifsByID200ApplicationJSON 
    
}

