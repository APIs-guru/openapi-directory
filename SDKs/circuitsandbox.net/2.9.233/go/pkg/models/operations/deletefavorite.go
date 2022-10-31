package operations

import (
"openapi/pkg/models/shared")

type DeleteFavoritePathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    
}

type DeleteFavoriteSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteFavoriteRequest struct {
    PathParams DeleteFavoritePathParams 
    Security DeleteFavoriteSecurity 
    
}

type DeleteFavoriteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

