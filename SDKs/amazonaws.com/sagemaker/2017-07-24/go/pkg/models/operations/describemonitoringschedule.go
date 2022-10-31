package operations

import (
"openapi/pkg/models/shared")


type DescribeMonitoringScheduleXAmzTargetEnum string

const (
    DescribeMonitoringScheduleXAmzTargetEnumSageMakerDescribeMonitoringSchedule DescribeMonitoringScheduleXAmzTargetEnum = "SageMaker.DescribeMonitoringSchedule"
)


type DescribeMonitoringScheduleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeMonitoringScheduleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeMonitoringScheduleRequest struct {
    Headers DescribeMonitoringScheduleHeaders 
    Request shared.DescribeMonitoringScheduleRequest `request:"mediaType=application/json"`
    
}

type DescribeMonitoringScheduleResponse struct {
    ContentType string 
    DescribeMonitoringScheduleResponse *shared.DescribeMonitoringScheduleResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

