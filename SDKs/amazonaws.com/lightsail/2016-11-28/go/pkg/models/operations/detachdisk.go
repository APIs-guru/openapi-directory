package operations

import (
"openapi/pkg/models/shared")


type DetachDiskXAmzTargetEnum string

const (
    DetachDiskXAmzTargetEnumLightsail20161128DetachDisk DetachDiskXAmzTargetEnum = "Lightsail_20161128.DetachDisk"
)


type DetachDiskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DetachDiskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DetachDiskRequest struct {
    Headers DetachDiskHeaders 
    Request shared.DetachDiskRequest `request:"mediaType=application/json"`
    
}

type DetachDiskResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    DetachDiskResult *shared.DetachDiskResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

