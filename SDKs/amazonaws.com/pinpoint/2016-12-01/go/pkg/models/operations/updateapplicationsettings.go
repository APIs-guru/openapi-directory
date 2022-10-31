package operations

import (
"openapi/pkg/models/shared")

type UpdateApplicationSettingsPathParams struct {
    ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
    
}

type UpdateApplicationSettingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest struct {
    CampaignHook *shared.CampaignHook `json:"CampaignHook,omitempty"`
    CloudWatchMetricsEnabled *bool `json:"CloudWatchMetricsEnabled,omitempty"`
    EventTaggingEnabled *bool `json:"EventTaggingEnabled,omitempty"`
    Limits *shared.CampaignLimits `json:"Limits,omitempty"`
    QuietTime *shared.QuietTime `json:"QuietTime,omitempty"`
    
}

type UpdateApplicationSettingsRequestBody struct {
    WriteApplicationSettingsRequest UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest `json:"WriteApplicationSettingsRequest"`
    
}

type UpdateApplicationSettingsRequest struct {
    PathParams UpdateApplicationSettingsPathParams 
    Headers UpdateApplicationSettingsHeaders 
    Request UpdateApplicationSettingsRequestBody `request:"mediaType=application/json"`
    
}

type UpdateApplicationSettingsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    MethodNotAllowedException *interface{} 
    NotFoundException *interface{} 
    PayloadTooLargeException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UpdateApplicationSettingsResponse *shared.UpdateApplicationSettingsResponse 
    
}

