package operations

import (
"openapi/pkg/models/shared")


type DescribeParameterGroupsXAmzTargetEnum string

const (
    DescribeParameterGroupsXAmzTargetEnumAmazonMemoryDbDescribeParameterGroups DescribeParameterGroupsXAmzTargetEnum = "AmazonMemoryDB.DescribeParameterGroups"
)


type DescribeParameterGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeParameterGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeParameterGroupsRequest struct {
    Headers DescribeParameterGroupsHeaders 
    Request shared.DescribeParameterGroupsRequest `request:"mediaType=application/json"`
    
}

type DescribeParameterGroupsResponse struct {
    ContentType string 
    DescribeParameterGroupsResponse *shared.DescribeParameterGroupsResponse 
    InvalidParameterCombinationException *interface{} 
    InvalidParameterValueException *interface{} 
    ParameterGroupNotFoundFault *interface{} 
    ServiceLinkedRoleNotFoundFault *interface{} 
    StatusCode int64 
    
}

