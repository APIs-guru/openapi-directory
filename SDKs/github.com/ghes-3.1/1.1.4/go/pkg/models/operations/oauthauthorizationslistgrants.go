package operations

import (
"openapi/pkg/models/shared")

type OauthAuthorizationsListGrantsQueryParams struct {
    ClientID *string `queryParam:"style=form,explode=true,name=client_id"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type OauthAuthorizationsListGrantsRequest struct {
    QueryParams OauthAuthorizationsListGrantsQueryParams 
    
}

type OauthAuthorizationsListGrantsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ApplicationGrants []shared.ApplicationGrant 
    BasicError *shared.BasicError 
    
}

