package operations

import (
"openapi/pkg/models/shared")


type CreateMonitoringScheduleXAmzTargetEnum string

const (
    CreateMonitoringScheduleXAmzTargetEnumSageMakerCreateMonitoringSchedule CreateMonitoringScheduleXAmzTargetEnum = "SageMaker.CreateMonitoringSchedule"
)


type CreateMonitoringScheduleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateMonitoringScheduleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateMonitoringScheduleRequest struct {
    Headers CreateMonitoringScheduleHeaders 
    Request shared.CreateMonitoringScheduleRequest `request:"mediaType=application/json"`
    
}

type CreateMonitoringScheduleResponse struct {
    ContentType string 
    CreateMonitoringScheduleResponse *shared.CreateMonitoringScheduleResponse 
    ResourceInUse *interface{} 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

