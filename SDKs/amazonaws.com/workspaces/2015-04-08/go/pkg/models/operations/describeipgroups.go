package operations

import (
"openapi/pkg/models/shared")


type DescribeIPGroupsXAmzTargetEnum string

const (
    DescribeIPGroupsXAmzTargetEnumWorkspacesServiceDescribeIPGroups DescribeIPGroupsXAmzTargetEnum = "WorkspacesService.DescribeIpGroups"
)


type DescribeIPGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeIPGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeIPGroupsRequest struct {
    Headers DescribeIPGroupsHeaders 
    Request shared.DescribeIPGroupsRequest `request:"mediaType=application/json"`
    
}

type DescribeIPGroupsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeIPGroupsResult *shared.DescribeIPGroupsResult 
    InvalidParameterValuesException *interface{} 
    StatusCode int64 
    
}

