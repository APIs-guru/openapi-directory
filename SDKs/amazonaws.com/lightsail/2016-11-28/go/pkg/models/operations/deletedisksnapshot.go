package operations

import (
"openapi/pkg/models/shared")


type DeleteDiskSnapshotXAmzTargetEnum string

const (
    DeleteDiskSnapshotXAmzTargetEnumLightsail20161128DeleteDiskSnapshot DeleteDiskSnapshotXAmzTargetEnum = "Lightsail_20161128.DeleteDiskSnapshot"
)


type DeleteDiskSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDiskSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDiskSnapshotRequest struct {
    Headers DeleteDiskSnapshotHeaders 
    Request shared.DeleteDiskSnapshotRequest `request:"mediaType=application/json"`
    
}

type DeleteDiskSnapshotResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    DeleteDiskSnapshotResult *shared.DeleteDiskSnapshotResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

