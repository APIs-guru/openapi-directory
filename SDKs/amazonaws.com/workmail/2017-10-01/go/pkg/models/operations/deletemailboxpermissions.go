package operations

import (
"openapi/pkg/models/shared")


type DeleteMailboxPermissionsXAmzTargetEnum string

const (
    DeleteMailboxPermissionsXAmzTargetEnumWorkMailServiceDeleteMailboxPermissions DeleteMailboxPermissionsXAmzTargetEnum = "WorkMailService.DeleteMailboxPermissions"
)


type DeleteMailboxPermissionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteMailboxPermissionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteMailboxPermissionsRequest struct {
    Headers DeleteMailboxPermissionsHeaders 
    Request shared.DeleteMailboxPermissionsRequest `request:"mediaType=application/json"`
    
}

type DeleteMailboxPermissionsResponse struct {
    ContentType string 
    DeleteMailboxPermissionsResponse map[string]interface{} 
    EntityNotFoundException *interface{} 
    EntityStateException *interface{} 
    InvalidParameterException *interface{} 
    OrganizationNotFoundException *interface{} 
    OrganizationStateException *interface{} 
    StatusCode int64 
    
}

