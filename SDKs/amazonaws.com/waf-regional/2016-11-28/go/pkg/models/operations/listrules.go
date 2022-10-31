package operations

import (
"openapi/pkg/models/shared")


type ListRulesXAmzTargetEnum string

const (
    ListRulesXAmzTargetEnumAwswafRegional20161128ListRules ListRulesXAmzTargetEnum = "AWSWAF_Regional_20161128.ListRules"
)


type ListRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListRulesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListRulesRequest struct {
    Headers ListRulesHeaders 
    Request shared.ListRulesRequest `request:"mediaType=application/json"`
    
}

type ListRulesResponse struct {
    ContentType string 
    ListRulesResponse *shared.ListRulesResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    
}

