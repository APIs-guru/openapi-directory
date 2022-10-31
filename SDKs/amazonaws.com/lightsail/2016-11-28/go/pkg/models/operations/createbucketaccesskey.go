package operations

import (
"openapi/pkg/models/shared")


type CreateBucketAccessKeyXAmzTargetEnum string

const (
    CreateBucketAccessKeyXAmzTargetEnumLightsail20161128CreateBucketAccessKey CreateBucketAccessKeyXAmzTargetEnum = "Lightsail_20161128.CreateBucketAccessKey"
)


type CreateBucketAccessKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateBucketAccessKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateBucketAccessKeyRequest struct {
    Headers CreateBucketAccessKeyHeaders 
    Request shared.CreateBucketAccessKeyRequest `request:"mediaType=application/json"`
    
}

type CreateBucketAccessKeyResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateBucketAccessKeyResult *shared.CreateBucketAccessKeyResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

