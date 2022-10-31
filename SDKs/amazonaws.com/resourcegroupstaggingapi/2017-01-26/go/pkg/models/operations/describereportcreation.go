package operations

import (
"openapi/pkg/models/shared")


type DescribeReportCreationXAmzTargetEnum string

const (
    DescribeReportCreationXAmzTargetEnumResourceGroupsTaggingApi20170126DescribeReportCreation DescribeReportCreationXAmzTargetEnum = "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation"
)


type DescribeReportCreationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeReportCreationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeReportCreationRequest struct {
    Headers DescribeReportCreationHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type DescribeReportCreationResponse struct {
    ConstraintViolationException *interface{} 
    ContentType string 
    DescribeReportCreationOutput *shared.DescribeReportCreationOutput 
    InternalServiceException *interface{} 
    InvalidParameterException *interface{} 
    StatusCode int64 
    ThrottledException *interface{} 
    
}

