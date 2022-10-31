package operations

import (
"openapi/pkg/models/shared")


type DeleteLifecyclePolicyXAmzTargetEnum string

const (
    DeleteLifecyclePolicyXAmzTargetEnumMediaStore20170901DeleteLifecyclePolicy DeleteLifecyclePolicyXAmzTargetEnum = "MediaStore_20170901.DeleteLifecyclePolicy"
)


type DeleteLifecyclePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteLifecyclePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteLifecyclePolicyRequest struct {
    Headers DeleteLifecyclePolicyHeaders 
    Request shared.DeleteLifecyclePolicyInput `request:"mediaType=application/json"`
    
}

type DeleteLifecyclePolicyResponse struct {
    ContainerInUseException *interface{} 
    ContainerNotFoundException *interface{} 
    ContentType string 
    DeleteLifecyclePolicyOutput map[string]interface{} 
    InternalServerError *interface{} 
    PolicyNotFoundException *interface{} 
    StatusCode int64 
    
}

