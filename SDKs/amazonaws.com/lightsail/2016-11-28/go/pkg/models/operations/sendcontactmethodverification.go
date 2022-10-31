package operations

import (
"openapi/pkg/models/shared")


type SendContactMethodVerificationXAmzTargetEnum string

const (
    SendContactMethodVerificationXAmzTargetEnumLightsail20161128SendContactMethodVerification SendContactMethodVerificationXAmzTargetEnum = "Lightsail_20161128.SendContactMethodVerification"
)


type SendContactMethodVerificationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SendContactMethodVerificationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SendContactMethodVerificationRequest struct {
    Headers SendContactMethodVerificationHeaders 
    Request shared.SendContactMethodVerificationRequest `request:"mediaType=application/json"`
    
}

type SendContactMethodVerificationResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    SendContactMethodVerificationResult *shared.SendContactMethodVerificationResult 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

