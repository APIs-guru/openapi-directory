package operations

import (
"openapi/pkg/models/shared")


type SetIPAddressTypeXAmzTargetEnum string

const (
    SetIPAddressTypeXAmzTargetEnumLightsail20161128SetIPAddressType SetIPAddressTypeXAmzTargetEnum = "Lightsail_20161128.SetIpAddressType"
)


type SetIPAddressTypeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SetIPAddressTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SetIPAddressTypeRequest struct {
    Headers SetIPAddressTypeHeaders 
    Request shared.SetIPAddressTypeRequest `request:"mediaType=application/json"`
    
}

type SetIPAddressTypeResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    SetIPAddressTypeResult *shared.SetIPAddressTypeResult 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

