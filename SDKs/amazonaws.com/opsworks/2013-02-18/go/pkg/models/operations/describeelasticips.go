package operations

import (
"openapi/pkg/models/shared")


type DescribeElasticIpsXAmzTargetEnum string

const (
    DescribeElasticIpsXAmzTargetEnumOpsWorks20130218DescribeElasticIps DescribeElasticIpsXAmzTargetEnum = "OpsWorks_20130218.DescribeElasticIps"
)


type DescribeElasticIpsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeElasticIpsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeElasticIpsRequest struct {
    Headers DescribeElasticIpsHeaders 
    Request shared.DescribeElasticIpsRequest `request:"mediaType=application/json"`
    
}

type DescribeElasticIpsResponse struct {
    ContentType string 
    DescribeElasticIpsResult *shared.DescribeElasticIpsResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

