package operations

import (
"openapi/pkg/models/shared")

type SearchSuggestQueryParams struct {
    Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    Lang shared.LangEnum `queryParam:"style=form,explode=true,name=lang"`
    Q string `queryParam:"style=form,explode=true,name=q"`
    Rights shared.RightsEnum `queryParam:"style=form,explode=true,name=rights"`
    
}

type SearchSuggestRequest struct {
    QueryParams SearchSuggestQueryParams 
    
}

type SearchSuggestResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

