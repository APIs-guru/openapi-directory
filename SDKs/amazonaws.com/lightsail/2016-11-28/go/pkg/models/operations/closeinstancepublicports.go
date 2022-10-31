package operations

import (
"openapi/pkg/models/shared")


type CloseInstancePublicPortsXAmzTargetEnum string

const (
    CloseInstancePublicPortsXAmzTargetEnumLightsail20161128CloseInstancePublicPorts CloseInstancePublicPortsXAmzTargetEnum = "Lightsail_20161128.CloseInstancePublicPorts"
)


type CloseInstancePublicPortsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CloseInstancePublicPortsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CloseInstancePublicPortsRequest struct {
    Headers CloseInstancePublicPortsHeaders 
    Request shared.CloseInstancePublicPortsRequest `request:"mediaType=application/json"`
    
}

type CloseInstancePublicPortsResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    CloseInstancePublicPortsResult *shared.CloseInstancePublicPortsResult 
    ContentType string 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

