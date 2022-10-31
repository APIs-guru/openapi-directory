package operations

import (
"openapi/pkg/models/shared")


type StartMonitoringScheduleXAmzTargetEnum string

const (
    StartMonitoringScheduleXAmzTargetEnumSageMakerStartMonitoringSchedule StartMonitoringScheduleXAmzTargetEnum = "SageMaker.StartMonitoringSchedule"
)


type StartMonitoringScheduleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartMonitoringScheduleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartMonitoringScheduleRequest struct {
    Headers StartMonitoringScheduleHeaders 
    Request shared.StartMonitoringScheduleRequest `request:"mediaType=application/json"`
    
}

type StartMonitoringScheduleResponse struct {
    ContentType string 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

