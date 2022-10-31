package operations

import (
"openapi/pkg/models/shared")


type ResetDistributionCacheXAmzTargetEnum string

const (
    ResetDistributionCacheXAmzTargetEnumLightsail20161128ResetDistributionCache ResetDistributionCacheXAmzTargetEnum = "Lightsail_20161128.ResetDistributionCache"
)


type ResetDistributionCacheHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ResetDistributionCacheXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ResetDistributionCacheRequest struct {
    Headers ResetDistributionCacheHeaders 
    Request shared.ResetDistributionCacheRequest `request:"mediaType=application/json"`
    
}

type ResetDistributionCacheResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ResetDistributionCacheResult *shared.ResetDistributionCacheResult 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

