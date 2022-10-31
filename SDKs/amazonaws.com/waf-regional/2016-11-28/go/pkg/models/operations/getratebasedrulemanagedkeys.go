package operations

import (
"openapi/pkg/models/shared")


type GetRateBasedRuleManagedKeysXAmzTargetEnum string

const (
    GetRateBasedRuleManagedKeysXAmzTargetEnumAwswafRegional20161128GetRateBasedRuleManagedKeys GetRateBasedRuleManagedKeysXAmzTargetEnum = "AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys"
)


type GetRateBasedRuleManagedKeysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetRateBasedRuleManagedKeysXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetRateBasedRuleManagedKeysRequest struct {
    Headers GetRateBasedRuleManagedKeysHeaders 
    Request shared.GetRateBasedRuleManagedKeysRequest `request:"mediaType=application/json"`
    
}

type GetRateBasedRuleManagedKeysResponse struct {
    ContentType string 
    GetRateBasedRuleManagedKeysResponse *shared.GetRateBasedRuleManagedKeysResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafInvalidParameterException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

