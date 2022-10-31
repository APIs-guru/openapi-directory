package operations

import (
"openapi/pkg/models/shared")


type DisassociateDelegateFromResourceXAmzTargetEnum string

const (
    DisassociateDelegateFromResourceXAmzTargetEnumWorkMailServiceDisassociateDelegateFromResource DisassociateDelegateFromResourceXAmzTargetEnum = "WorkMailService.DisassociateDelegateFromResource"
)


type DisassociateDelegateFromResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateDelegateFromResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateDelegateFromResourceRequest struct {
    Headers DisassociateDelegateFromResourceHeaders 
    Request shared.DisassociateDelegateFromResourceRequest `request:"mediaType=application/json"`
    
}

type DisassociateDelegateFromResourceResponse struct {
    ContentType string 
    DisassociateDelegateFromResourceResponse map[string]interface{} 
    EntityNotFoundException *interface{} 
    EntityStateException *interface{} 
    InvalidParameterException *interface{} 
    OrganizationNotFoundException *interface{} 
    OrganizationStateException *interface{} 
    StatusCode int64 
    
}

