package operations

import (
"openapi/pkg/models/shared")


type DeleteWebAclxAmzTargetEnum string

const (
    DeleteWebAclxAmzTargetEnumAwswaf20150824DeleteWebACL DeleteWebAclxAmzTargetEnum = "AWSWAF_20150824.DeleteWebACL"
)


type DeleteWebACLHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteWebAclxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteWebACLRequest struct {
    Headers DeleteWebACLHeaders 
    Request shared.DeleteWebACLRequest `request:"mediaType=application/json"`
    
}

type DeleteWebACLResponse struct {
    ContentType string 
    DeleteWebACLResponse *shared.DeleteWebACLResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafNonEmptyEntityException *interface{} 
    WafNonexistentItemException *interface{} 
    WafReferencedItemException *interface{} 
    WafStaleDataException *interface{} 
    WafTagOperationException *interface{} 
    WafTagOperationInternalErrorException *interface{} 
    
}

