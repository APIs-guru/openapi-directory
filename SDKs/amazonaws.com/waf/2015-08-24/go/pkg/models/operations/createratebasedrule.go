package operations

import (
"openapi/pkg/models/shared")


type CreateRateBasedRuleXAmzTargetEnum string

const (
    CreateRateBasedRuleXAmzTargetEnumAwswaf20150824CreateRateBasedRule CreateRateBasedRuleXAmzTargetEnum = "AWSWAF_20150824.CreateRateBasedRule"
)


type CreateRateBasedRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateRateBasedRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateRateBasedRuleRequest struct {
    Headers CreateRateBasedRuleHeaders 
    Request shared.CreateRateBasedRuleRequest `request:"mediaType=application/json"`
    
}

type CreateRateBasedRuleResponse struct {
    ContentType string 
    CreateRateBasedRuleResponse *shared.CreateRateBasedRuleResponse 
    StatusCode int64 
    WafBadRequestException *interface{} 
    WafDisallowedNameException *interface{} 
    WafInternalErrorException *interface{} 
    WafInvalidParameterException *interface{} 
    WafLimitsExceededException *interface{} 
    WafStaleDataException *interface{} 
    WafTagOperationException *interface{} 
    WafTagOperationInternalErrorException *interface{} 
    
}

