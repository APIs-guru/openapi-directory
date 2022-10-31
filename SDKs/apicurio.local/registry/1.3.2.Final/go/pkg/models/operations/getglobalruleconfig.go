package operations

import (
"openapi/pkg/models/shared")


type GetGlobalRuleConfigRuleEnum string

const (
    GetGlobalRuleConfigRuleEnumValidity GetGlobalRuleConfigRuleEnum = "VALIDITY"
GetGlobalRuleConfigRuleEnumCompatibility GetGlobalRuleConfigRuleEnum = "COMPATIBILITY"
)


type GetGlobalRuleConfigPathParams struct {
    Rule GetGlobalRuleConfigRuleEnum `pathParam:"style=simple,explode=false,name=rule"`
    
}

type GetGlobalRuleConfigRequest struct {
    PathParams GetGlobalRuleConfigPathParams 
    
}

type GetGlobalRuleConfigResponse struct {
    ContentType string 
    Error *shared.Error 
    Rule *shared.Rule 
    StatusCode int64 
    
}

