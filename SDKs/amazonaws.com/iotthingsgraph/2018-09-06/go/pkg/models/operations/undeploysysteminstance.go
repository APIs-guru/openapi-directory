package operations

import (
"openapi/pkg/models/shared")


type UndeploySystemInstanceXAmzTargetEnum string

const (
    UndeploySystemInstanceXAmzTargetEnumIotThingsGraphFrontEndServiceUndeploySystemInstance UndeploySystemInstanceXAmzTargetEnum = "IotThingsGraphFrontEndService.UndeploySystemInstance"
)


type UndeploySystemInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UndeploySystemInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UndeploySystemInstanceRequest struct {
    Headers UndeploySystemInstanceHeaders 
    Request shared.UndeploySystemInstanceRequest `request:"mediaType=application/json"`
    
}

type UndeploySystemInstanceResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UndeploySystemInstanceResponse *shared.UndeploySystemInstanceResponse 
    
}

