package operations

import (
"openapi/pkg/models/shared")


type TagResourceXAmzTargetEnum string

const (
    TagResourceXAmzTargetEnumSecretsmanagerTagResource TagResourceXAmzTargetEnum = "secretsmanager.TagResource"
)


type TagResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget TagResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type TagResourceRequest struct {
    Headers TagResourceHeaders 
    Request shared.TagResourceRequest `request:"mediaType=application/json"`
    
}

type TagResourceResponse struct {
    ContentType string 
    InternalServiceError *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

