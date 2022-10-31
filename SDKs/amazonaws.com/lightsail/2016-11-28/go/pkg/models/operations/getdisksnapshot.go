package operations

import (
"openapi/pkg/models/shared")


type GetDiskSnapshotXAmzTargetEnum string

const (
    GetDiskSnapshotXAmzTargetEnumLightsail20161128GetDiskSnapshot GetDiskSnapshotXAmzTargetEnum = "Lightsail_20161128.GetDiskSnapshot"
)


type GetDiskSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDiskSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDiskSnapshotRequest struct {
    Headers GetDiskSnapshotHeaders 
    Request shared.GetDiskSnapshotRequest `request:"mediaType=application/json"`
    
}

type GetDiskSnapshotResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    GetDiskSnapshotResult *shared.GetDiskSnapshotResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

