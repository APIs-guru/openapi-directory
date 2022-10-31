package operations

import (
"openapi/pkg/models/shared")

type GetSectionsQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=ending_before"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
    Where *string `queryParam:"style=form,explode=true,name=where"`
    
}

type GetSectionsRequest struct {
    QueryParams GetSectionsQueryParams 
    
}

type GetSectionsResponse struct {
    ContentType string 
    SectionsResponse *shared.SectionsResponse 
    StatusCode int64 
    
}

