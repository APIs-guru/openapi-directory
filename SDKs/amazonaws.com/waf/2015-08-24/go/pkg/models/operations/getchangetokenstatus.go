package operations

import (
"openapi/pkg/models/shared")


type GetChangeTokenStatusXAmzTargetEnum string

const (
    GetChangeTokenStatusXAmzTargetEnumAwswaf20150824GetChangeTokenStatus GetChangeTokenStatusXAmzTargetEnum = "AWSWAF_20150824.GetChangeTokenStatus"
)


type GetChangeTokenStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetChangeTokenStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetChangeTokenStatusRequest struct {
    Headers GetChangeTokenStatusHeaders 
    Request shared.GetChangeTokenStatusRequest `request:"mediaType=application/json"`
    
}

type GetChangeTokenStatusResponse struct {
    ContentType string 
    GetChangeTokenStatusResponse *shared.GetChangeTokenStatusResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

