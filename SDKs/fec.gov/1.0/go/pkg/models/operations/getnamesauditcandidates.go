package operations

import (
"openapi/pkg/models/shared")

type GetNamesAuditCandidatesQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    Q []string `queryParam:"style=form,explode=true,name=q"`
    
}

type GetNamesAuditCandidatesRequest struct {
    QueryParams GetNamesAuditCandidatesQueryParams 
    
}

type GetNamesAuditCandidatesResponse struct {
    AuditCandidateSearchList *shared.AuditCandidateSearchList 
    ContentType string 
    StatusCode int64 
    
}

