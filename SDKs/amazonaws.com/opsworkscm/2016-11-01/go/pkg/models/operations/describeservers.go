package operations

import (
"openapi/pkg/models/shared")

type DescribeServersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeServersXAmzTargetEnum string

const (
    DescribeServersXAmzTargetEnumOpsWorksCmV20161101DescribeServers DescribeServersXAmzTargetEnum = "OpsWorksCM_V2016_11_01.DescribeServers"
)


type DescribeServersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeServersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeServersRequest struct {
    QueryParams DescribeServersQueryParams 
    Headers DescribeServersHeaders 
    Request shared.DescribeServersRequest `request:"mediaType=application/json"`
    
}

type DescribeServersResponse struct {
    ContentType string 
    DescribeServersResponse *shared.DescribeServersResponse 
    InvalidNextTokenException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

