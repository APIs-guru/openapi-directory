package operations

import (
"openapi/pkg/models/shared")

type RandomGifQueryParams struct {
    Rating *string `queryParam:"style=form,explode=true,name=rating"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    
}

type RandomGifRequest struct {
    QueryParams RandomGifQueryParams 
    
}

type RandomGif200ApplicationJSON struct {
    Data *shared.Gif `json:"data,omitempty"`
    Meta *shared.Meta `json:"meta,omitempty"`
    
}

type RandomGifResponse struct {
    ContentType string 
    StatusCode int64 
    RandomGif200ApplicationJSONObject *RandomGif200ApplicationJSON 
    
}

