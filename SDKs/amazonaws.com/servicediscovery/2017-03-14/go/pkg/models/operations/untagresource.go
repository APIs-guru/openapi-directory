package operations

import (
"openapi/pkg/models/shared")


type UntagResourceXAmzTargetEnum string

const (
    UntagResourceXAmzTargetEnumRoute53AutoNamingV20170314UntagResource UntagResourceXAmzTargetEnum = "Route53AutoNaming_v20170314.UntagResource"
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
    Request shared.UntagResourceRequest `request:"mediaType=application/json"`
    
}

type UntagResourceResponse struct {
    ContentType string 
    InvalidInput *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UntagResourceResponse map[string]interface{} 
    
}

