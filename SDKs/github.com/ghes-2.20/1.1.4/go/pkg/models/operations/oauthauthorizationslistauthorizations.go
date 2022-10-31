package operations

import (
"openapi/pkg/models/shared")

type OauthAuthorizationsListAuthorizationsQueryParams struct {
    ClientID *string `queryParam:"style=form,explode=true,name=client_id"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type OauthAuthorizationsListAuthorizationsRequest struct {
    QueryParams OauthAuthorizationsListAuthorizationsQueryParams 
    
}

type OauthAuthorizationsListAuthorizationsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Authorizations []shared.Authorization 
    BasicError *shared.BasicError 
    
}

