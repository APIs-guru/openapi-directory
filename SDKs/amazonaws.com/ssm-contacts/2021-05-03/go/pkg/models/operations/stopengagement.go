package operations

import (
"openapi/pkg/models/shared")


type StopEngagementXAmzTargetEnum string

const (
    StopEngagementXAmzTargetEnumSsmContactsStopEngagement StopEngagementXAmzTargetEnum = "SSMContacts.StopEngagement"
)


type StopEngagementHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopEngagementXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopEngagementRequest struct {
    Headers StopEngagementHeaders 
    Request shared.StopEngagementRequest `request:"mediaType=application/json"`
    
}

type StopEngagementResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    StopEngagementResult map[string]interface{} 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

