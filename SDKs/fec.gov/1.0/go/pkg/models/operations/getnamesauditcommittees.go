package operations

import (
"openapi/pkg/models/shared")

type GetNamesAuditCommitteesQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    Q []string `queryParam:"style=form,explode=true,name=q"`
    
}

type GetNamesAuditCommitteesRequest struct {
    QueryParams GetNamesAuditCommitteesQueryParams 
    
}

type GetNamesAuditCommitteesResponse struct {
    AuditCommitteeSearchList *shared.AuditCommitteeSearchList 
    ContentType string 
    StatusCode int64 
    
}

