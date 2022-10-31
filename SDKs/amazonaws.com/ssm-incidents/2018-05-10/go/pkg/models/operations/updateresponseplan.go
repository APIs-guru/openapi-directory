package operations

import (
"openapi/pkg/models/shared")

type UpdateResponsePlanHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateResponsePlanRequestBodyChatChannel struct {
    ChatbotSns []string `json:"chatbotSns,omitempty"`
    Empty map[string]interface{} `json:"empty,omitempty"`
    
}

type UpdateResponsePlanRequestBody struct {
    Actions []shared.Action `json:"actions,omitempty"`
    Arn string `json:"arn"`
    ChatChannel *UpdateResponsePlanRequestBodyChatChannel `json:"chatChannel,omitempty"`
    ClientToken *string `json:"clientToken,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Engagements []string `json:"engagements,omitempty"`
    IncidentTemplateDedupeString *string `json:"incidentTemplateDedupeString,omitempty"`
    IncidentTemplateImpact *int64 `json:"incidentTemplateImpact,omitempty"`
    IncidentTemplateNotificationTargets []shared.NotificationTargetItem `json:"incidentTemplateNotificationTargets,omitempty"`
    IncidentTemplateSummary *string `json:"incidentTemplateSummary,omitempty"`
    IncidentTemplateTitle *string `json:"incidentTemplateTitle,omitempty"`
    
}

type UpdateResponsePlanRequest struct {
    Headers UpdateResponsePlanHeaders 
    Request UpdateResponsePlanRequestBody `request:"mediaType=application/json"`
    
}

type UpdateResponsePlanResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateResponsePlanOutput map[string]interface{} 
    ValidationException *interface{} 
    
}

