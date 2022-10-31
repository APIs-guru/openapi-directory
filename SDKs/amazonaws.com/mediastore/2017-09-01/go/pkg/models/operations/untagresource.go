package operations

import (
"openapi/pkg/models/shared")


type UntagResourceXAmzTargetEnum string

const (
    UntagResourceXAmzTargetEnumMediaStore20170901UntagResource UntagResourceXAmzTargetEnum = "MediaStore_20170901.UntagResource"
)


type UntagResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UntagResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UntagResourceRequest struct {
    Headers UntagResourceHeaders 
    Request shared.UntagResourceInput `request:"mediaType=application/json"`
    
}

type UntagResourceResponse struct {
    ContainerInUseException *interface{} 
    ContainerNotFoundException *interface{} 
    ContentType string 
    InternalServerError *interface{} 
    StatusCode int64 
    UntagResourceOutput map[string]interface{} 
    
}

