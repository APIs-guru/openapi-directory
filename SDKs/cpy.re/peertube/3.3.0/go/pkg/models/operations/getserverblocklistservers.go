package operations

import (
"openapi/pkg/models/shared")

type GetServerBlocklistServersQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    
}

type GetServerBlocklistServersSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetServerBlocklistServersRequest struct {
    QueryParams GetServerBlocklistServersQueryParams 
    Security GetServerBlocklistServersSecurity 
    
}

type GetServerBlocklistServersResponse struct {
    ContentType string 
    StatusCode int64 
    
}

