package operations

import (
"openapi/pkg/models/shared")

type TariffcomponentsQueryParams struct {
    Email *string `queryParam:"style=form,explode=true,name=email"`
    Kwha *int64 `queryParam:"style=form,explode=true,name=kwha"`
    Milliseconds *int64 `queryParam:"style=form,explode=true,name=milliseconds"`
    Wh *int64 `queryParam:"style=form,explode=true,name=wh"`
    Zipcode *string `queryParam:"style=form,explode=true,name=zipcode"`
    
}

type TariffcomponentsRequest struct {
    QueryParams TariffcomponentsQueryParams 
    
}

type TariffcomponentsResponse struct {
    ContentType string 
    StatusCode int64 
    Componentsh0 *shared.Componentsh0 
    
}

