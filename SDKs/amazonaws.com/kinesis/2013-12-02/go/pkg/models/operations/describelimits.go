package operations

import (
"openapi/pkg/models/shared")


type DescribeLimitsXAmzTargetEnum string

const (
    DescribeLimitsXAmzTargetEnumKinesis20131202DescribeLimits DescribeLimitsXAmzTargetEnum = "Kinesis_20131202.DescribeLimits"
)


type DescribeLimitsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeLimitsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeLimitsRequest struct {
    Headers DescribeLimitsHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type DescribeLimitsResponse struct {
    ContentType string 
    DescribeLimitsOutput *shared.DescribeLimitsOutput 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}

