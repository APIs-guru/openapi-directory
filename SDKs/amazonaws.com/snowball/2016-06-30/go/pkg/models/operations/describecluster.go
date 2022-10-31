package operations

import (
"openapi/pkg/models/shared")


type DescribeClusterXAmzTargetEnum string

const (
    DescribeClusterXAmzTargetEnumAwsieSnowballJobManagementServiceDescribeCluster DescribeClusterXAmzTargetEnum = "AWSIESnowballJobManagementService.DescribeCluster"
)


type DescribeClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeClusterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeClusterRequest struct {
    Headers DescribeClusterHeaders 
    Request shared.DescribeClusterRequest `request:"mediaType=application/json"`
    
}

type DescribeClusterResponse struct {
    ContentType string 
    DescribeClusterResult *shared.DescribeClusterResult 
    InvalidResourceException *interface{} 
    StatusCode int64 
    
}

