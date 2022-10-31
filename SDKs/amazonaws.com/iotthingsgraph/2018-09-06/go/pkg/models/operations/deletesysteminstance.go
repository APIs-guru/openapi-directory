package operations

import (
"openapi/pkg/models/shared")


type DeleteSystemInstanceXAmzTargetEnum string

const (
    DeleteSystemInstanceXAmzTargetEnumIotThingsGraphFrontEndServiceDeleteSystemInstance DeleteSystemInstanceXAmzTargetEnum = "IotThingsGraphFrontEndService.DeleteSystemInstance"
)


type DeleteSystemInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteSystemInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteSystemInstanceRequest struct {
    Headers DeleteSystemInstanceHeaders 
    Request shared.DeleteSystemInstanceRequest `request:"mediaType=application/json"`
    
}

type DeleteSystemInstanceResponse struct {
    ContentType string 
    DeleteSystemInstanceResponse map[string]interface{} 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceInUseException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

