package operations

import (
"openapi/pkg/models/shared")


type SetResourceAccessForBucketXAmzTargetEnum string

const (
    SetResourceAccessForBucketXAmzTargetEnumLightsail20161128SetResourceAccessForBucket SetResourceAccessForBucketXAmzTargetEnum = "Lightsail_20161128.SetResourceAccessForBucket"
)


type SetResourceAccessForBucketHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SetResourceAccessForBucketXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SetResourceAccessForBucketRequest struct {
    Headers SetResourceAccessForBucketHeaders 
    Request shared.SetResourceAccessForBucketRequest `request:"mediaType=application/json"`
    
}

type SetResourceAccessForBucketResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    ServiceException *interface{} 
    SetResourceAccessForBucketResult *shared.SetResourceAccessForBucketResult 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

