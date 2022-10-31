package operations

import (
"openapi/pkg/models/shared")


type DescribeDeploymentsXAmzTargetEnum string

const (
    DescribeDeploymentsXAmzTargetEnumOpsWorks20130218DescribeDeployments DescribeDeploymentsXAmzTargetEnum = "OpsWorks_20130218.DescribeDeployments"
)


type DescribeDeploymentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDeploymentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDeploymentsRequest struct {
    Headers DescribeDeploymentsHeaders 
    Request shared.DescribeDeploymentsRequest `request:"mediaType=application/json"`
    
}

type DescribeDeploymentsResponse struct {
    ContentType string 
    DescribeDeploymentsResult *shared.DescribeDeploymentsResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

