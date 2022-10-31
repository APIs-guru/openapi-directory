package operations

import (
"openapi/pkg/models/shared")

type GetContentproSearchQueryParams struct {
    Terms string `queryParam:"style=form,explode=true,name=terms"`
    
}

type GetContentproSearchRequest struct {
    QueryParams GetContentproSearchQueryParams 
    
}

type GetContentproSearch200ApplicationJSONData struct {
    Article *shared.Article `json:"article,omitempty"`
    Company *shared.ContentProCompany `json:"company,omitempty"`
    Snippets *shared.ContentProSnippets `json:"snippets,omitempty"`
    
}

type GetContentproSearch200ApplicationJSON struct {
    CallsPerMonth *string `json:"calls_per_month,omitempty"`
    CountRemaining *string `json:"count_remaining,omitempty"`
    Data []GetContentproSearch200ApplicationJSONData `json:"data,omitempty"`
    RenewalDate *string `json:"renewal_date,omitempty"`
    
}

type GetContentproSearchResponse struct {
    ContentType string 
    GetContentproSearch200ApplicationJSONObject *GetContentproSearch200ApplicationJSON 
    StatusCode int64 
    
}

