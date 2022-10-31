package operations

import (
"openapi/pkg/models/shared")


type DeleteReplicationJobXAmzTargetEnum string

const (
    DeleteReplicationJobXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteReplicationJob DeleteReplicationJobXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.DeleteReplicationJob"
)


type DeleteReplicationJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteReplicationJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteReplicationJobRequest struct {
    Headers DeleteReplicationJobHeaders 
    Request shared.DeleteReplicationJobRequest `request:"mediaType=application/json"`
    
}

type DeleteReplicationJobResponse struct {
    ContentType string 
    DeleteReplicationJobResponse map[string]interface{} 
    InvalidParameterException *interface{} 
    MissingRequiredParameterException *interface{} 
    OperationNotPermittedException *interface{} 
    ReplicationJobNotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedOperationException *interface{} 
    
}

