package operations

import (
"openapi/pkg/models/shared")

type GetV3AffiliatesSearchVideosQueryParams struct {
    Phrase *string `queryParam:"style=form,explode=true,name=phrase"`
    
}

type GetV3AffiliatesSearchVideosHeaders struct {
    AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
    
}

type GetV3AffiliatesSearchVideosRequest struct {
    QueryParams GetV3AffiliatesSearchVideosQueryParams 
    Headers GetV3AffiliatesSearchVideosHeaders 
    
}

type GetV3AffiliatesSearchVideosResponse struct {
    AffiliateVideoSearchResponse *shared.AffiliateVideoSearchResponse 
    ContentType string 
    StatusCode int64 
    
}

