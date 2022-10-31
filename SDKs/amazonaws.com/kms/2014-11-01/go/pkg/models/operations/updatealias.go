package operations

import (
"openapi/pkg/models/shared")


type UpdateAliasXAmzTargetEnum string

const (
    UpdateAliasXAmzTargetEnumTrentServiceUpdateAlias UpdateAliasXAmzTargetEnum = "TrentService.UpdateAlias"
)


type UpdateAliasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateAliasXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateAliasRequest struct {
    Headers UpdateAliasHeaders 
    Request shared.UpdateAliasRequest `request:"mediaType=application/json"`
    
}

type UpdateAliasResponse struct {
    ContentType string 
    DependencyTimeoutException *interface{} 
    KmsInternalException *interface{} 
    KmsInvalidStateException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

