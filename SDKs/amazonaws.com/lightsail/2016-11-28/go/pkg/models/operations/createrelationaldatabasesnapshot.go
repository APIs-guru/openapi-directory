package operations

import (
"openapi/pkg/models/shared")


type CreateRelationalDatabaseSnapshotXAmzTargetEnum string

const (
    CreateRelationalDatabaseSnapshotXAmzTargetEnumLightsail20161128CreateRelationalDatabaseSnapshot CreateRelationalDatabaseSnapshotXAmzTargetEnum = "Lightsail_20161128.CreateRelationalDatabaseSnapshot"
)


type CreateRelationalDatabaseSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateRelationalDatabaseSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateRelationalDatabaseSnapshotRequest struct {
    Headers CreateRelationalDatabaseSnapshotHeaders 
    Request shared.CreateRelationalDatabaseSnapshotRequest `request:"mediaType=application/json"`
    
}

type CreateRelationalDatabaseSnapshotResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    CreateRelationalDatabaseSnapshotResult *shared.CreateRelationalDatabaseSnapshotResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

