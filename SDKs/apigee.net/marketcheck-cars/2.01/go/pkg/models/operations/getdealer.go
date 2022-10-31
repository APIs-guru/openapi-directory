package operations

import (
"openapi/pkg/models/shared")

type GetDealerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDealerQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    Provider *bool `queryParam:"style=form,explode=true,name=provider"`
    
}

type GetDealerRequest struct {
    PathParams GetDealerPathParams 
    QueryParams GetDealerQueryParams 
    
}

type GetDealerResponse struct {
    ContentType string 
    Dealer *shared.Dealer 
    Error *shared.Error 
    StatusCode int64 
    
}

