package operations

import (
"openapi/pkg/models/shared")

type UpdateIncidentRecordHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateIncidentRecordRequestBodyChatChannel struct {
    ChatbotSns []string `json:"chatbotSns,omitempty"`
    Empty map[string]interface{} `json:"empty,omitempty"`
    
}


type UpdateIncidentRecordRequestBodyStatusEnum string

const (
    UpdateIncidentRecordRequestBodyStatusEnumOpen UpdateIncidentRecordRequestBodyStatusEnum = "OPEN"
UpdateIncidentRecordRequestBodyStatusEnumResolved UpdateIncidentRecordRequestBodyStatusEnum = "RESOLVED"
)


type UpdateIncidentRecordRequestBody struct {
    Arn string `json:"arn"`
    ChatChannel *UpdateIncidentRecordRequestBodyChatChannel `json:"chatChannel,omitempty"`
    ClientToken *string `json:"clientToken,omitempty"`
    Impact *int64 `json:"impact,omitempty"`
    NotificationTargets []shared.NotificationTargetItem `json:"notificationTargets,omitempty"`
    Status *UpdateIncidentRecordRequestBodyStatusEnum `json:"status,omitempty"`
    Summary *string `json:"summary,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type UpdateIncidentRecordRequest struct {
    Headers UpdateIncidentRecordHeaders 
    Request UpdateIncidentRecordRequestBody `request:"mediaType=application/json"`
    
}

type UpdateIncidentRecordResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateIncidentRecordOutput map[string]interface{} 
    ValidationException *interface{} 
    
}

