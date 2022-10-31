package operations

import (
"openapi/pkg/models/shared")

type GetServerBlocklistAccountsQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    
}

type GetServerBlocklistAccountsSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetServerBlocklistAccountsRequest struct {
    QueryParams GetServerBlocklistAccountsQueryParams 
    Security GetServerBlocklistAccountsSecurity 
    
}

type GetServerBlocklistAccountsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

