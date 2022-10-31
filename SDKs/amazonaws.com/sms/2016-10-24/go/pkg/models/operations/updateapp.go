package operations

import (
"openapi/pkg/models/shared")


type UpdateAppXAmzTargetEnum string

const (
    UpdateAppXAmzTargetEnumAwsServerMigrationServiceV20161024UpdateApp UpdateAppXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.UpdateApp"
)


type UpdateAppHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateAppXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateAppRequest struct {
    Headers UpdateAppHeaders 
    Request shared.UpdateAppRequest `request:"mediaType=application/json"`
    
}

type UpdateAppResponse struct {
    ContentType string 
    InternalError *interface{} 
    InvalidParameterException *interface{} 
    MissingRequiredParameterException *interface{} 
    OperationNotPermittedException *interface{} 
    StatusCode int64 
    UnauthorizedOperationException *interface{} 
    UpdateAppResponse *shared.UpdateAppResponse 
    
}

