package operations

import (
"openapi/pkg/models/shared")


type GetIPSetXAmzTargetEnum string

const (
    GetIPSetXAmzTargetEnumAwswafRegional20161128GetIPSet GetIPSetXAmzTargetEnum = "AWSWAF_Regional_20161128.GetIPSet"
)


type GetIPSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetIPSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetIPSetRequest struct {
    Headers GetIPSetHeaders 
    Request shared.GetIPSetRequest `request:"mediaType=application/json"`
    
}

type GetIPSetResponse struct {
    ContentType string 
    GetIPSetResponse *shared.GetIPSetResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

