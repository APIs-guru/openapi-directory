package operations

import (
"openapi/pkg/models/shared")


type DeregisterFromWorkMailXAmzTargetEnum string

const (
    DeregisterFromWorkMailXAmzTargetEnumWorkMailServiceDeregisterFromWorkMail DeregisterFromWorkMailXAmzTargetEnum = "WorkMailService.DeregisterFromWorkMail"
)


type DeregisterFromWorkMailHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeregisterFromWorkMailXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeregisterFromWorkMailRequest struct {
    Headers DeregisterFromWorkMailHeaders 
    Request shared.DeregisterFromWorkMailRequest `request:"mediaType=application/json"`
    
}

type DeregisterFromWorkMailResponse struct {
    ContentType string 
    DeregisterFromWorkMailResponse map[string]interface{} 
    EntityNotFoundException *interface{} 
    EntityStateException *interface{} 
    InvalidParameterException *interface{} 
    OrganizationNotFoundException *interface{} 
    OrganizationStateException *interface{} 
    StatusCode int64 
    
}

