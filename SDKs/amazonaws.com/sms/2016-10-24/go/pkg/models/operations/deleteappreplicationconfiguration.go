package operations

import (
"openapi/pkg/models/shared")


type DeleteAppReplicationConfigurationXAmzTargetEnum string

const (
    DeleteAppReplicationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteAppReplicationConfiguration DeleteAppReplicationConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration"
)


type DeleteAppReplicationConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteAppReplicationConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteAppReplicationConfigurationRequest struct {
    Headers DeleteAppReplicationConfigurationHeaders 
    Request shared.DeleteAppReplicationConfigurationRequest `request:"mediaType=application/json"`
    
}

type DeleteAppReplicationConfigurationResponse struct {
    ContentType string 
    DeleteAppReplicationConfigurationResponse map[string]interface{} 
    InternalError *interface{} 
    InvalidParameterException *interface{} 
    MissingRequiredParameterException *interface{} 
    OperationNotPermittedException *interface{} 
    StatusCode int64 
    UnauthorizedOperationException *interface{} 
    
}

