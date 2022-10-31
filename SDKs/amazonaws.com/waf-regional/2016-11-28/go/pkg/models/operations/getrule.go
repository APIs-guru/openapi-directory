package operations

import (
"openapi/pkg/models/shared")


type GetRuleXAmzTargetEnum string

const (
    GetRuleXAmzTargetEnumAwswafRegional20161128GetRule GetRuleXAmzTargetEnum = "AWSWAF_Regional_20161128.GetRule"
)


type GetRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetRuleRequest struct {
    Headers GetRuleHeaders 
    Request shared.GetRuleRequest `request:"mediaType=application/json"`
    
}

type GetRuleResponse struct {
    ContentType string 
    GetRuleResponse *shared.GetRuleResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

