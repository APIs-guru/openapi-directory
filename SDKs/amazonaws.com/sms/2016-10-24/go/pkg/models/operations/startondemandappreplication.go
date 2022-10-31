package operations

import (
"openapi/pkg/models/shared")


type StartOnDemandAppReplicationXAmzTargetEnum string

const (
    StartOnDemandAppReplicationXAmzTargetEnumAwsServerMigrationServiceV20161024StartOnDemandAppReplication StartOnDemandAppReplicationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication"
)


type StartOnDemandAppReplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartOnDemandAppReplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartOnDemandAppReplicationRequest struct {
    Headers StartOnDemandAppReplicationHeaders 
    Request shared.StartOnDemandAppReplicationRequest `request:"mediaType=application/json"`
    
}

type StartOnDemandAppReplicationResponse struct {
    ContentType string 
    InternalError *interface{} 
    InvalidParameterException *interface{} 
    MissingRequiredParameterException *interface{} 
    OperationNotPermittedException *interface{} 
    StartOnDemandAppReplicationResponse map[string]interface{} 
    StatusCode int64 
    UnauthorizedOperationException *interface{} 
    
}

