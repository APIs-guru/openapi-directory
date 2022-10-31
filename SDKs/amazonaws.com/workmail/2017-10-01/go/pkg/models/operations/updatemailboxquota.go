package operations

import (
"openapi/pkg/models/shared")


type UpdateMailboxQuotaXAmzTargetEnum string

const (
    UpdateMailboxQuotaXAmzTargetEnumWorkMailServiceUpdateMailboxQuota UpdateMailboxQuotaXAmzTargetEnum = "WorkMailService.UpdateMailboxQuota"
)


type UpdateMailboxQuotaHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateMailboxQuotaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateMailboxQuotaRequest struct {
    Headers UpdateMailboxQuotaHeaders 
    Request shared.UpdateMailboxQuotaRequest `request:"mediaType=application/json"`
    
}

type UpdateMailboxQuotaResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    EntityStateException *interface{} 
    InvalidParameterException *interface{} 
    OrganizationNotFoundException *interface{} 
    OrganizationStateException *interface{} 
    StatusCode int64 
    UpdateMailboxQuotaResponse map[string]interface{} 
    
}

