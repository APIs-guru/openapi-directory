package operations

import (
"openapi/pkg/models/shared")

type DescribeActivationsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeActivationsXAmzTargetEnum string

const (
    DescribeActivationsXAmzTargetEnumAmazonSsmDescribeActivations DescribeActivationsXAmzTargetEnum = "AmazonSSM.DescribeActivations"
)


type DescribeActivationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeActivationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeActivationsRequest struct {
    QueryParams DescribeActivationsQueryParams 
    Headers DescribeActivationsHeaders 
    Request shared.DescribeActivationsRequest `request:"mediaType=application/json"`
    
}

type DescribeActivationsResponse struct {
    ContentType string 
    DescribeActivationsResult *shared.DescribeActivationsResult 
    InternalServerError *interface{} 
    InvalidFilter *interface{} 
    InvalidNextToken *interface{} 
    StatusCode int64 
    
}

