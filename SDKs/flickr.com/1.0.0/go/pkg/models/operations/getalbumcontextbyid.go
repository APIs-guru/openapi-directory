package operations

import (
"openapi/pkg/models/shared")

type GetAlbumContextByIDQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    PhotoID string `queryParam:"style=form,explode=true,name=photo_id"`
    PhotosetID *string `queryParam:"style=form,explode=true,name=photoset_id"`
    
}

type GetAlbumContextByIDRequest struct {
    QueryParams GetAlbumContextByIDQueryParams 
    
}

type GetAlbumContextByID200ApplicationJSONCount struct {
    Content *string `json:"_content,omitempty"`
    
}

type GetAlbumContextByID200ApplicationJSON struct {
    Count *GetAlbumContextByID200ApplicationJSONCount `json:"count,omitempty"`
    Nextphoto *shared.ContextPhoto `json:"nextphoto,omitempty"`
    Prevphoto *shared.ContextPhoto `json:"prevphoto,omitempty"`
    Stat *string `json:"stat,omitempty"`
    
}

type GetAlbumContextByIDResponse struct {
    ContentType string 
    StatusCode int64 
    GetAlbumContextByID200ApplicationJSONObject *GetAlbumContextByID200ApplicationJSON 
    
}

