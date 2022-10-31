package operations

import (
"openapi/pkg/models/shared")


type DeleteAlarmXAmzTargetEnum string

const (
    DeleteAlarmXAmzTargetEnumLightsail20161128DeleteAlarm DeleteAlarmXAmzTargetEnum = "Lightsail_20161128.DeleteAlarm"
)


type DeleteAlarmHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteAlarmXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteAlarmRequest struct {
    Headers DeleteAlarmHeaders 
    Request shared.DeleteAlarmRequest `request:"mediaType=application/json"`
    
}

type DeleteAlarmResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeleteAlarmResult *shared.DeleteAlarmResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

