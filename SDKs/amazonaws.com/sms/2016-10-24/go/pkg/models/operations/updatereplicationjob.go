package operations

import (
"openapi/pkg/models/shared")


type UpdateReplicationJobXAmzTargetEnum string

const (
    UpdateReplicationJobXAmzTargetEnumAwsServerMigrationServiceV20161024UpdateReplicationJob UpdateReplicationJobXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.UpdateReplicationJob"
)


type UpdateReplicationJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateReplicationJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateReplicationJobRequest struct {
    Headers UpdateReplicationJobHeaders 
    Request shared.UpdateReplicationJobRequest `request:"mediaType=application/json"`
    
}

type UpdateReplicationJobResponse struct {
    ContentType string 
    InternalError *interface{} 
    InvalidParameterException *interface{} 
    MissingRequiredParameterException *interface{} 
    OperationNotPermittedException *interface{} 
    ReplicationJobNotFoundException *interface{} 
    ServerCannotBeReplicatedException *interface{} 
    StatusCode int64 
    TemporarilyUnavailableException *interface{} 
    UnauthorizedOperationException *interface{} 
    UpdateReplicationJobResponse map[string]interface{} 
    
}

