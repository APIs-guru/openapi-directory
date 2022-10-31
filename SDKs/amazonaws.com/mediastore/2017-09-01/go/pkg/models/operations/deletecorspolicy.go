package operations

import (
"openapi/pkg/models/shared")


type DeleteCorsPolicyXAmzTargetEnum string

const (
    DeleteCorsPolicyXAmzTargetEnumMediaStore20170901DeleteCorsPolicy DeleteCorsPolicyXAmzTargetEnum = "MediaStore_20170901.DeleteCorsPolicy"
)


type DeleteCorsPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteCorsPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteCorsPolicyRequest struct {
    Headers DeleteCorsPolicyHeaders 
    Request shared.DeleteCorsPolicyInput `request:"mediaType=application/json"`
    
}

type DeleteCorsPolicyResponse struct {
    ContainerInUseException *interface{} 
    ContainerNotFoundException *interface{} 
    ContentType string 
    CorsPolicyNotFoundException *interface{} 
    DeleteCorsPolicyOutput map[string]interface{} 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

