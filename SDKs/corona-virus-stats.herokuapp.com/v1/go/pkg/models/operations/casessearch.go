package operations

import (
"openapi/pkg/models/shared")

type CasesSearchQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type CasesSearchRequest struct {
    QueryParams CasesSearchQueryParams 
    
}

type CasesSearch200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.CountryStats `json:"results"`
    
}

type CasesSearchResponse struct {
    ContentType string 
    StatusCode int64 
    CasesSearch200ApplicationJSONObject *CasesSearch200ApplicationJSON 
    
}

