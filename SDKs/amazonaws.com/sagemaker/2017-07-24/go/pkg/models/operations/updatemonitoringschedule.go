package operations

import (
"openapi/pkg/models/shared")


type UpdateMonitoringScheduleXAmzTargetEnum string

const (
    UpdateMonitoringScheduleXAmzTargetEnumSageMakerUpdateMonitoringSchedule UpdateMonitoringScheduleXAmzTargetEnum = "SageMaker.UpdateMonitoringSchedule"
)


type UpdateMonitoringScheduleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateMonitoringScheduleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateMonitoringScheduleRequest struct {
    Headers UpdateMonitoringScheduleHeaders 
    Request shared.UpdateMonitoringScheduleRequest `request:"mediaType=application/json"`
    
}

type UpdateMonitoringScheduleResponse struct {
    ContentType string 
    ResourceLimitExceeded *interface{} 
    ResourceNotFound *interface{} 
    StatusCode int64 
    UpdateMonitoringScheduleResponse *shared.UpdateMonitoringScheduleResponse 
    
}

