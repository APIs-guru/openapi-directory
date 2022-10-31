package operations

import (
"openapi/pkg/models/shared")


type DeleteRuleGroupXAmzTargetEnum string

const (
    DeleteRuleGroupXAmzTargetEnumAwswafRegional20161128DeleteRuleGroup DeleteRuleGroupXAmzTargetEnum = "AWSWAF_Regional_20161128.DeleteRuleGroup"
)


type DeleteRuleGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteRuleGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteRuleGroupRequest struct {
    Headers DeleteRuleGroupHeaders 
    Request shared.DeleteRuleGroupRequest `request:"mediaType=application/json"`
    
}

type DeleteRuleGroupResponse struct {
    ContentType string 
    DeleteRuleGroupResponse *shared.DeleteRuleGroupResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidOperationException *interface{} 
    WafNonEmptyEntityException *interface{} 
    WafNonexistentItemException *interface{} 
    WafReferencedItemException *interface{} 
    WafStaleDataException *interface{} 
    WafTagOperationException *interface{} 
    WafTagOperationInternalErrorException *interface{} 
    
}

