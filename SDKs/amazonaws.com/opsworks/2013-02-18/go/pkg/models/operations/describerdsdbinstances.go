package operations

import (
"openapi/pkg/models/shared")


type DescribeRdsDbInstancesXAmzTargetEnum string

const (
    DescribeRdsDbInstancesXAmzTargetEnumOpsWorks20130218DescribeRdsDbInstances DescribeRdsDbInstancesXAmzTargetEnum = "OpsWorks_20130218.DescribeRdsDbInstances"
)


type DescribeRdsDbInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeRdsDbInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeRdsDbInstancesRequest struct {
    Headers DescribeRdsDbInstancesHeaders 
    Request shared.DescribeRdsDbInstancesRequest `request:"mediaType=application/json"`
    
}

type DescribeRdsDbInstancesResponse struct {
    ContentType string 
    DescribeRdsDbInstancesResult *shared.DescribeRdsDbInstancesResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

