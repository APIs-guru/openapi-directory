package operations

import (
"openapi/pkg/models/shared")


type GetDiskSnapshotsXAmzTargetEnum string

const (
    GetDiskSnapshotsXAmzTargetEnumLightsail20161128GetDiskSnapshots GetDiskSnapshotsXAmzTargetEnum = "Lightsail_20161128.GetDiskSnapshots"
)


type GetDiskSnapshotsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDiskSnapshotsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDiskSnapshotsRequest struct {
    Headers GetDiskSnapshotsHeaders 
    Request shared.GetDiskSnapshotsRequest `request:"mediaType=application/json"`
    
}

type GetDiskSnapshotsResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    GetDiskSnapshotsResult *shared.GetDiskSnapshotsResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

