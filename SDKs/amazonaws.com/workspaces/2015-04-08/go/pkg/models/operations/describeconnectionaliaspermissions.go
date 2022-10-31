package operations

import (
"openapi/pkg/models/shared")


type DescribeConnectionAliasPermissionsXAmzTargetEnum string

const (
    DescribeConnectionAliasPermissionsXAmzTargetEnumWorkspacesServiceDescribeConnectionAliasPermissions DescribeConnectionAliasPermissionsXAmzTargetEnum = "WorkspacesService.DescribeConnectionAliasPermissions"
)


type DescribeConnectionAliasPermissionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeConnectionAliasPermissionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeConnectionAliasPermissionsRequest struct {
    Headers DescribeConnectionAliasPermissionsHeaders 
    Request shared.DescribeConnectionAliasPermissionsRequest `request:"mediaType=application/json"`
    
}

type DescribeConnectionAliasPermissionsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeConnectionAliasPermissionsResult *shared.DescribeConnectionAliasPermissionsResult 
    InvalidParameterValuesException *interface{} 
    OperationNotSupportedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

