package operations

import (
"openapi/pkg/models/shared")

type SearchQueryParams struct {
    Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    Lang shared.LangEnum `queryParam:"style=form,explode=true,name=lang"`
    Q string `queryParam:"style=form,explode=true,name=q"`
    Rights shared.RightsEnum `queryParam:"style=form,explode=true,name=rights"`
    
}

type SearchRequest struct {
    QueryParams SearchQueryParams 
    
}

type SearchResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

