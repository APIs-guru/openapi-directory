package operations

import (
"openapi/pkg/models/shared")


type GetDistributionLatestCacheResetXAmzTargetEnum string

const (
    GetDistributionLatestCacheResetXAmzTargetEnumLightsail20161128GetDistributionLatestCacheReset GetDistributionLatestCacheResetXAmzTargetEnum = "Lightsail_20161128.GetDistributionLatestCacheReset"
)


type GetDistributionLatestCacheResetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDistributionLatestCacheResetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDistributionLatestCacheResetRequest struct {
    Headers GetDistributionLatestCacheResetHeaders 
    Request shared.GetDistributionLatestCacheResetRequest `request:"mediaType=application/json"`
    
}

type GetDistributionLatestCacheResetResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetDistributionLatestCacheResetResult *shared.GetDistributionLatestCacheResetResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

