package operations

import (
"openapi/pkg/models/shared")


type GetAppReplicationConfigurationXAmzTargetEnum string

const (
    GetAppReplicationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024GetAppReplicationConfiguration GetAppReplicationConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration"
)


type GetAppReplicationConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetAppReplicationConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetAppReplicationConfigurationRequest struct {
    Headers GetAppReplicationConfigurationHeaders 
    Request shared.GetAppReplicationConfigurationRequest `request:"mediaType=application/json"`
    
}

type GetAppReplicationConfigurationResponse struct {
    ContentType string 
    GetAppReplicationConfigurationResponse *shared.GetAppReplicationConfigurationResponse 
    InternalError *interface{} 
    InvalidParameterException *interface{} 
    MissingRequiredParameterException *interface{} 
    OperationNotPermittedException *interface{} 
    StatusCode int64 
    UnauthorizedOperationException *interface{} 
    
}

