package operations

import (
"openapi/pkg/models/shared")


type DescribeStreamSummaryXAmzTargetEnum string

const (
    DescribeStreamSummaryXAmzTargetEnumKinesis20131202DescribeStreamSummary DescribeStreamSummaryXAmzTargetEnum = "Kinesis_20131202.DescribeStreamSummary"
)


type DescribeStreamSummaryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeStreamSummaryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeStreamSummaryRequest struct {
    Headers DescribeStreamSummaryHeaders 
    Request shared.DescribeStreamSummaryInput `request:"mediaType=application/json"`
    
}

type DescribeStreamSummaryResponse struct {
    ContentType string 
    DescribeStreamSummaryOutput *shared.DescribeStreamSummaryOutput 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

