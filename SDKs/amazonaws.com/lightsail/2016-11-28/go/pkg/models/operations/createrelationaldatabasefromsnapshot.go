package operations

import (
"openapi/pkg/models/shared")


type CreateRelationalDatabaseFromSnapshotXAmzTargetEnum string

const (
    CreateRelationalDatabaseFromSnapshotXAmzTargetEnumLightsail20161128CreateRelationalDatabaseFromSnapshot CreateRelationalDatabaseFromSnapshotXAmzTargetEnum = "Lightsail_20161128.CreateRelationalDatabaseFromSnapshot"
)


type CreateRelationalDatabaseFromSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateRelationalDatabaseFromSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateRelationalDatabaseFromSnapshotRequest struct {
    Headers CreateRelationalDatabaseFromSnapshotHeaders 
    Request shared.CreateRelationalDatabaseFromSnapshotRequest `request:"mediaType=application/json"`
    
}

type CreateRelationalDatabaseFromSnapshotResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    CreateRelationalDatabaseFromSnapshotResult *shared.CreateRelationalDatabaseFromSnapshotResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

