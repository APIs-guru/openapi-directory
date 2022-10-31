package operations

import (
"openapi/pkg/models/shared")


type GetContainerPolicyXAmzTargetEnum string

const (
    GetContainerPolicyXAmzTargetEnumMediaStore20170901GetContainerPolicy GetContainerPolicyXAmzTargetEnum = "MediaStore_20170901.GetContainerPolicy"
)


type GetContainerPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetContainerPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetContainerPolicyRequest struct {
    Headers GetContainerPolicyHeaders 
    Request shared.GetContainerPolicyInput `request:"mediaType=application/json"`
    
}

type GetContainerPolicyResponse struct {
    ContainerInUseException *interface{} 
    ContainerNotFoundException *interface{} 
    ContentType string 
    GetContainerPolicyOutput *shared.GetContainerPolicyOutput 
    InternalServerError *interface{} 
    PolicyNotFoundException *interface{} 
    StatusCode int64 
    
}

