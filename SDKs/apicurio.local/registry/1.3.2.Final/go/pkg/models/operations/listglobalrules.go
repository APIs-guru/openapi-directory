package operations

import (
"openapi/pkg/models/shared")

type ListGlobalRulesResponse struct {
    ContentType string 
    Error *shared.Error 
    RuleTypes []shared.RuleTypeEnum 
    StatusCode int64 
    
}

