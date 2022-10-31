package operations

import (
"openapi/pkg/models/shared")


type DescribeRaidArraysXAmzTargetEnum string

const (
    DescribeRaidArraysXAmzTargetEnumOpsWorks20130218DescribeRaidArrays DescribeRaidArraysXAmzTargetEnum = "OpsWorks_20130218.DescribeRaidArrays"
)


type DescribeRaidArraysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeRaidArraysXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeRaidArraysRequest struct {
    Headers DescribeRaidArraysHeaders 
    Request shared.DescribeRaidArraysRequest `request:"mediaType=application/json"`
    
}

type DescribeRaidArraysResponse struct {
    ContentType string 
    DescribeRaidArraysResult *shared.DescribeRaidArraysResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

