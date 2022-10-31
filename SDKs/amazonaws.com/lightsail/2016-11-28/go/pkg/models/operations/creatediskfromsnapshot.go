package operations

import (
"openapi/pkg/models/shared")


type CreateDiskFromSnapshotXAmzTargetEnum string

const (
    CreateDiskFromSnapshotXAmzTargetEnumLightsail20161128CreateDiskFromSnapshot CreateDiskFromSnapshotXAmzTargetEnum = "Lightsail_20161128.CreateDiskFromSnapshot"
)


type CreateDiskFromSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateDiskFromSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateDiskFromSnapshotRequest struct {
    Headers CreateDiskFromSnapshotHeaders 
    Request shared.CreateDiskFromSnapshotRequest `request:"mediaType=application/json"`
    
}

type CreateDiskFromSnapshotResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    CreateDiskFromSnapshotResult *shared.CreateDiskFromSnapshotResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

