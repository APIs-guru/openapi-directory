package operations

import (
"openapi/pkg/models/shared")

type GetFavoritesByPersonIDQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    MaxFaveDate *float64 `queryParam:"style=form,explode=true,name=max_fave_date"`
    MinFaveDate *float64 `queryParam:"style=form,explode=true,name=min_fave_date"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    UserID string `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetFavoritesByPersonIDRequest struct {
    QueryParams GetFavoritesByPersonIDQueryParams 
    
}

type GetFavoritesByPersonID200ApplicationJSON struct {
    Page *float64 `json:"page,omitempty"`
    Pages *float64 `json:"pages,omitempty"`
    Perpage *float64 `json:"perpage,omitempty"`
    Photos []shared.Photo `json:"photos,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type GetFavoritesByPersonIDResponse struct {
    ContentType string 
    StatusCode int64 
    GetFavoritesByPersonID200ApplicationJSONObject *GetFavoritesByPersonID200ApplicationJSON 
    
}

