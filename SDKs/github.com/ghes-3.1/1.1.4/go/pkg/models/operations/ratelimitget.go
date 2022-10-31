package operations

import (
"openapi/pkg/models/shared")

type RateLimitGetResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    RateLimitOverview *shared.RateLimitOverview 
    
}

