package operations

import (
"openapi/pkg/models/shared")


type UpdateRuleXAmzTargetEnum string

const (
    UpdateRuleXAmzTargetEnumAwswaf20150824UpdateRule UpdateRuleXAmzTargetEnum = "AWSWAF_20150824.UpdateRule"
)


type UpdateRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateRuleRequest struct {
    Headers UpdateRuleHeaders 
    Request shared.UpdateRuleRequest `request:"mediaType=application/json"`
    
}

type UpdateRuleResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateRuleResponse *shared.UpdateRuleResponse 
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

