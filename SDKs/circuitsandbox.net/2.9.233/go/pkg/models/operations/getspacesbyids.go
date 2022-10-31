package operations

import (
"openapi/pkg/models/shared")

type GetSpacesByIdsQueryParams struct {
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    
}

type GetSpacesByIdsSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetSpacesByIdsRequest struct {
    QueryParams GetSpacesByIdsQueryParams 
    Security GetSpacesByIdsSecurity 
    
}

type GetSpacesByIdsResponse struct {
    Body []byte 
    ContentType string 
    GetSpacesResult *interface{} 
    StatusCode int64 
    
}

