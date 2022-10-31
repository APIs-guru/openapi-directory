package operations

import (
"openapi/pkg/models/shared")


type GetRateBasedRuleXAmzTargetEnum string

const (
    GetRateBasedRuleXAmzTargetEnumAwswaf20150824GetRateBasedRule GetRateBasedRuleXAmzTargetEnum = "AWSWAF_20150824.GetRateBasedRule"
)


type GetRateBasedRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetRateBasedRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetRateBasedRuleRequest struct {
    Headers GetRateBasedRuleHeaders 
    Request shared.GetRateBasedRuleRequest `request:"mediaType=application/json"`
    
}

type GetRateBasedRuleResponse struct {
    ContentType string 
    GetRateBasedRuleResponse *shared.GetRateBasedRuleResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

