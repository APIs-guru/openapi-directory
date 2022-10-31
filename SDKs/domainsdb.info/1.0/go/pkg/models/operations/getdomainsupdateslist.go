package operations

import (
"openapi/pkg/models/shared")

type GetDomainsUpdatesListQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    
}

type GetDomainsUpdatesListRequest struct {
    QueryParams GetDomainsUpdatesListQueryParams 
    
}

type GetDomainsUpdatesListResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateModel *shared.UpdateModel 
    
}

