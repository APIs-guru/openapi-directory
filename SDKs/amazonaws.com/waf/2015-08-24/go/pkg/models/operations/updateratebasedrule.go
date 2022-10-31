package operations

import (
"openapi/pkg/models/shared")


type UpdateRateBasedRuleXAmzTargetEnum string

const (
    UpdateRateBasedRuleXAmzTargetEnumAwswaf20150824UpdateRateBasedRule UpdateRateBasedRuleXAmzTargetEnum = "AWSWAF_20150824.UpdateRateBasedRule"
)


type UpdateRateBasedRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateRateBasedRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateRateBasedRuleRequest struct {
    Headers UpdateRateBasedRuleHeaders 
    Request shared.UpdateRateBasedRuleRequest `request:"mediaType=application/json"`
    
}

type UpdateRateBasedRuleResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateRateBasedRuleResponse *shared.UpdateRateBasedRuleResponse 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafInvalidOperationException *interface{} 
    WafInvalidParameterException *interface{} 
    WafLimitsExceededException *interface{} 
    WafNonexistentContainerException *interface{} 
    WafNonexistentItemException *interface{} 
    WafReferencedItemException *interface{} 
    WafStaleDataException *interface{} 
    
}

