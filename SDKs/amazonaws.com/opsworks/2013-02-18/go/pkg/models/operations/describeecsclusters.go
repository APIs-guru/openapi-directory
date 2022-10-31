package operations

import (
"openapi/pkg/models/shared")

type DescribeEcsClustersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeEcsClustersXAmzTargetEnum string

const (
    DescribeEcsClustersXAmzTargetEnumOpsWorks20130218DescribeEcsClusters DescribeEcsClustersXAmzTargetEnum = "OpsWorks_20130218.DescribeEcsClusters"
)


type DescribeEcsClustersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEcsClustersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEcsClustersRequest struct {
    QueryParams DescribeEcsClustersQueryParams 
    Headers DescribeEcsClustersHeaders 
    Request shared.DescribeEcsClustersRequest `request:"mediaType=application/json"`
    
}

type DescribeEcsClustersResponse struct {
    ContentType string 
    DescribeEcsClustersResult *shared.DescribeEcsClustersResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

