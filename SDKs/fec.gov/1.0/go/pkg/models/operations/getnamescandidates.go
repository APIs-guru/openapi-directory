package operations

import (
"openapi/pkg/models/shared")

type GetNamesCandidatesQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    Q []string `queryParam:"style=form,explode=true,name=q"`
    
}

type GetNamesCandidatesRequest struct {
    QueryParams GetNamesCandidatesQueryParams 
    
}

type GetNamesCandidatesResponse struct {
    CandidateSearchList *shared.CandidateSearchList 
    ContentType string 
    StatusCode int64 
    
}

