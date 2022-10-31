package operations

import (
"openapi/pkg/models/shared")


type DescribeDataIngestionJobXAmzTargetEnum string

const (
    DescribeDataIngestionJobXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDescribeDataIngestionJob DescribeDataIngestionJobXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob"
)


type DescribeDataIngestionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDataIngestionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDataIngestionJobRequest struct {
    Headers DescribeDataIngestionJobHeaders 
    Request shared.DescribeDataIngestionJobRequest `request:"mediaType=application/json"`
    
}

type DescribeDataIngestionJobResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeDataIngestionJobResponse *shared.DescribeDataIngestionJobResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

