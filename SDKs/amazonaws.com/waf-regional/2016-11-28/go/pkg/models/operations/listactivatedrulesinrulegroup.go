package operations

import (
"openapi/pkg/models/shared")


type ListActivatedRulesInRuleGroupXAmzTargetEnum string

const (
    ListActivatedRulesInRuleGroupXAmzTargetEnumAwswafRegional20161128ListActivatedRulesInRuleGroup ListActivatedRulesInRuleGroupXAmzTargetEnum = "AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup"
)


type ListActivatedRulesInRuleGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListActivatedRulesInRuleGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListActivatedRulesInRuleGroupRequest struct {
    Headers ListActivatedRulesInRuleGroupHeaders 
    Request shared.ListActivatedRulesInRuleGroupRequest `request:"mediaType=application/json"`
    
}

type ListActivatedRulesInRuleGroupResponse struct {
    ContentType string 
    ListActivatedRulesInRuleGroupResponse *shared.ListActivatedRulesInRuleGroupResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidParameterException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

