package operations

import (
"openapi/pkg/models/shared")


type GetByteMatchSetXAmzTargetEnum string

const (
    GetByteMatchSetXAmzTargetEnumAwswaf20150824GetByteMatchSet GetByteMatchSetXAmzTargetEnum = "AWSWAF_20150824.GetByteMatchSet"
)


type GetByteMatchSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetByteMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetByteMatchSetRequest struct {
    Headers GetByteMatchSetHeaders 
    Request shared.GetByteMatchSetRequest `request:"mediaType=application/json"`
    
}

type GetByteMatchSetResponse struct {
    ContentType string 
    GetByteMatchSetResponse *shared.GetByteMatchSetResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

