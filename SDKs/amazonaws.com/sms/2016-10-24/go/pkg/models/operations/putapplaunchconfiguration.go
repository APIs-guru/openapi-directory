package operations

import (
"openapi/pkg/models/shared")


type PutAppLaunchConfigurationXAmzTargetEnum string

const (
    PutAppLaunchConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024PutAppLaunchConfiguration PutAppLaunchConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration"
)


type PutAppLaunchConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutAppLaunchConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutAppLaunchConfigurationRequest struct {
    Headers PutAppLaunchConfigurationHeaders 
    Request shared.PutAppLaunchConfigurationRequest `request:"mediaType=application/json"`
    
}

type PutAppLaunchConfigurationResponse struct {
    ContentType string 
    InternalError *interface{} 
    InvalidParameterException *interface{} 
    MissingRequiredParameterException *interface{} 
    OperationNotPermittedException *interface{} 
    PutAppLaunchConfigurationResponse map[string]interface{} 
    StatusCode int64 
    UnauthorizedOperationException *interface{} 
    
}

