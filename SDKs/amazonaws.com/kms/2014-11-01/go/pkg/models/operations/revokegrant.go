package operations

import (
"openapi/pkg/models/shared")


type RevokeGrantXAmzTargetEnum string

const (
    RevokeGrantXAmzTargetEnumTrentServiceRevokeGrant RevokeGrantXAmzTargetEnum = "TrentService.RevokeGrant"
)


type RevokeGrantHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RevokeGrantXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RevokeGrantRequest struct {
    Headers RevokeGrantHeaders 
    Request shared.RevokeGrantRequest `request:"mediaType=application/json"`
    
}

type RevokeGrantResponse struct {
    ContentType string 
    DependencyTimeoutException *interface{} 
    InvalidArnException *interface{} 
    InvalidGrantIDException *interface{} 
    KmsInternalException *interface{} 
    KmsInvalidStateException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

