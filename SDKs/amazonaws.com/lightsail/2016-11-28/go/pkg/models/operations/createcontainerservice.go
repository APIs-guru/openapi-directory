package operations

import (
"openapi/pkg/models/shared")


type CreateContainerServiceXAmzTargetEnum string

const (
    CreateContainerServiceXAmzTargetEnumLightsail20161128CreateContainerService CreateContainerServiceXAmzTargetEnum = "Lightsail_20161128.CreateContainerService"
)


type CreateContainerServiceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateContainerServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateContainerServiceRequest struct {
    Headers CreateContainerServiceHeaders 
    Request shared.CreateContainerServiceRequest `request:"mediaType=application/json"`
    
}

type CreateContainerServiceResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateContainerServiceResult *shared.CreateContainerServiceResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

