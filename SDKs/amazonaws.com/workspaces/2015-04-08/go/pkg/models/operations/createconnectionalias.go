package operations

import (
"openapi/pkg/models/shared")


type CreateConnectionAliasXAmzTargetEnum string

const (
    CreateConnectionAliasXAmzTargetEnumWorkspacesServiceCreateConnectionAlias CreateConnectionAliasXAmzTargetEnum = "WorkspacesService.CreateConnectionAlias"
)


type CreateConnectionAliasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateConnectionAliasXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateConnectionAliasRequest struct {
    Headers CreateConnectionAliasHeaders 
    Request shared.CreateConnectionAliasRequest `request:"mediaType=application/json"`
    
}

type CreateConnectionAliasResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateConnectionAliasResult *shared.CreateConnectionAliasResult 
    InvalidParameterValuesException *interface{} 
    InvalidResourceStateException *interface{} 
    OperationNotSupportedException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceLimitExceededException *interface{} 
    StatusCode int64 
    
}

