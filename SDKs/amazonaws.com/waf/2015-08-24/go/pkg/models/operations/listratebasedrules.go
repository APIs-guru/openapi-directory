package operations

import (
"openapi/pkg/models/shared")


type ListRateBasedRulesXAmzTargetEnum string

const (
    ListRateBasedRulesXAmzTargetEnumAwswaf20150824ListRateBasedRules ListRateBasedRulesXAmzTargetEnum = "AWSWAF_20150824.ListRateBasedRules"
)


type ListRateBasedRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListRateBasedRulesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListRateBasedRulesRequest struct {
    Headers ListRateBasedRulesHeaders 
    Request shared.ListRateBasedRulesRequest `request:"mediaType=application/json"`
    
}

type ListRateBasedRulesResponse struct {
    ContentType string 
    ListRateBasedRulesResponse *shared.ListRateBasedRulesResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    
}

