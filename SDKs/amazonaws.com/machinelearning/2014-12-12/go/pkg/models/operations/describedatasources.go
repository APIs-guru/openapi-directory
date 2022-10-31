package operations

import (
"openapi/pkg/models/shared")

type DescribeDataSourcesQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=Limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeDataSourcesXAmzTargetEnum string

const (
    DescribeDataSourcesXAmzTargetEnumAmazonMl20141212DescribeDataSources DescribeDataSourcesXAmzTargetEnum = "AmazonML_20141212.DescribeDataSources"
)


type DescribeDataSourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDataSourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDataSourcesRequest struct {
    QueryParams DescribeDataSourcesQueryParams 
    Headers DescribeDataSourcesHeaders 
    Request shared.DescribeDataSourcesInput `request:"mediaType=application/json"`
    
}

type DescribeDataSourcesResponse struct {
    ContentType string 
    DescribeDataSourcesOutput *shared.DescribeDataSourcesOutput 
    InternalServerException *interface{} 
    InvalidInputException *interface{} 
    StatusCode int64 
    
}

