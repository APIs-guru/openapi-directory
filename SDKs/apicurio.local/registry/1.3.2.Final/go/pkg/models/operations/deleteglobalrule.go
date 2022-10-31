package operations

import (
"openapi/pkg/models/shared")


type DeleteGlobalRuleRuleEnum string

const (
    DeleteGlobalRuleRuleEnumValidity DeleteGlobalRuleRuleEnum = "VALIDITY"
DeleteGlobalRuleRuleEnumCompatibility DeleteGlobalRuleRuleEnum = "COMPATIBILITY"
)


type DeleteGlobalRulePathParams struct {
    Rule DeleteGlobalRuleRuleEnum `pathParam:"style=simple,explode=false,name=rule"`
    
}

type DeleteGlobalRuleRequest struct {
    PathParams DeleteGlobalRulePathParams 
    
}

type DeleteGlobalRuleResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

