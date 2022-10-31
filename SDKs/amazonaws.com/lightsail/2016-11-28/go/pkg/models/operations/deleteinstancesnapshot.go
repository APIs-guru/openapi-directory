package operations

import (
"openapi/pkg/models/shared")


type DeleteInstanceSnapshotXAmzTargetEnum string

const (
    DeleteInstanceSnapshotXAmzTargetEnumLightsail20161128DeleteInstanceSnapshot DeleteInstanceSnapshotXAmzTargetEnum = "Lightsail_20161128.DeleteInstanceSnapshot"
)


type DeleteInstanceSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteInstanceSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteInstanceSnapshotRequest struct {
    Headers DeleteInstanceSnapshotHeaders 
    Request shared.DeleteInstanceSnapshotRequest `request:"mediaType=application/json"`
    
}

type DeleteInstanceSnapshotResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    DeleteInstanceSnapshotResult *shared.DeleteInstanceSnapshotResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

