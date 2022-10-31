package operations

import (
"openapi/pkg/models/shared")


type GetLifecyclePolicyXAmzTargetEnum string

const (
    GetLifecyclePolicyXAmzTargetEnumMediaStore20170901GetLifecyclePolicy GetLifecyclePolicyXAmzTargetEnum = "MediaStore_20170901.GetLifecyclePolicy"
)


type GetLifecyclePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetLifecyclePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetLifecyclePolicyRequest struct {
    Headers GetLifecyclePolicyHeaders 
    Request shared.GetLifecyclePolicyInput `request:"mediaType=application/json"`
    
}

type GetLifecyclePolicyResponse struct {
    ContainerInUseException *interface{} 
    ContainerNotFoundException *interface{} 
    ContentType string 
    GetLifecyclePolicyOutput *shared.GetLifecyclePolicyOutput 
    InternalServerError *interface{} 
    PolicyNotFoundException *interface{} 
    StatusCode int64 
    
}

