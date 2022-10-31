package operations

import (
"openapi/pkg/models/shared")


type UpdateRuleGroupXAmzTargetEnum string

const (
    UpdateRuleGroupXAmzTargetEnumAwswafRegional20161128UpdateRuleGroup UpdateRuleGroupXAmzTargetEnum = "AWSWAF_Regional_20161128.UpdateRuleGroup"
)


type UpdateRuleGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateRuleGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateRuleGroupRequest struct {
    Headers UpdateRuleGroupHeaders 
    Request shared.UpdateRuleGroupRequest `request:"mediaType=application/json"`
    
}

type UpdateRuleGroupResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateRuleGroupResponse *shared.UpdateRuleGroupResponse 
    WafInternalErrorException *interface{} 
    WafInvalidOperationException *interface{} 
    WafInvalidParameterException *interface{} 
    WafLimitsExceededException *interface{} 
    WafNonexistentContainerException *interface{} 
    WafNonexistentItemException *interface{} 
    WafStaleDataException *interface{} 
    
}

