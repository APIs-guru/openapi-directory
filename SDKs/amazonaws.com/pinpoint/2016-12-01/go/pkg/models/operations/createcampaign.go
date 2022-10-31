package operations

import (
"openapi/pkg/models/shared")

type CreateCampaignPathParams struct {
    ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
    
}

type CreateCampaignHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateCampaignRequestBodyWriteCampaignRequest struct {
    AdditionalTreatments []shared.WriteTreatmentResource `json:"AdditionalTreatments,omitempty"`
    CustomDeliveryConfiguration *shared.CustomDeliveryConfiguration `json:"CustomDeliveryConfiguration,omitempty"`
    Description *string `json:"Description,omitempty"`
    HoldoutPercent *int64 `json:"HoldoutPercent,omitempty"`
    Hook *shared.CampaignHook `json:"Hook,omitempty"`
    IsPaused *bool `json:"IsPaused,omitempty"`
    Limits *shared.CampaignLimits `json:"Limits,omitempty"`
    MessageConfiguration *shared.MessageConfiguration `json:"MessageConfiguration,omitempty"`
    Name *string `json:"Name,omitempty"`
    Priority *int64 `json:"Priority,omitempty"`
    Schedule *shared.Schedule `json:"Schedule,omitempty"`
    SegmentID *string `json:"SegmentId,omitempty"`
    SegmentVersion *int64 `json:"SegmentVersion,omitempty"`
    TemplateConfiguration *shared.TemplateConfiguration `json:"TemplateConfiguration,omitempty"`
    TreatmentDescription *string `json:"TreatmentDescription,omitempty"`
    TreatmentName *string `json:"TreatmentName,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateCampaignRequestBody struct {
    WriteCampaignRequest CreateCampaignRequestBodyWriteCampaignRequest `json:"WriteCampaignRequest"`
    
}

type CreateCampaignRequest struct {
    PathParams CreateCampaignPathParams 
    Headers CreateCampaignHeaders 
    Request CreateCampaignRequestBody `request:"mediaType=application/json"`
    
}

type CreateCampaignResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateCampaignResponse *shared.CreateCampaignResponse 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    MethodNotAllowedException *interface{} 
    NotFoundException *interface{} 
    PayloadTooLargeException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

