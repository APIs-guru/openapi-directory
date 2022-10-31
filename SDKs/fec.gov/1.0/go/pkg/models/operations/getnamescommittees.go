package operations

import (
"openapi/pkg/models/shared")

type GetNamesCommitteesQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    Q []string `queryParam:"style=form,explode=true,name=q"`
    
}

type GetNamesCommitteesRequest struct {
    QueryParams GetNamesCommitteesQueryParams 
    
}

type GetNamesCommitteesResponse struct {
    CommitteeSearchList *shared.CommitteeSearchList 
    ContentType string 
    StatusCode int64 
    
}

