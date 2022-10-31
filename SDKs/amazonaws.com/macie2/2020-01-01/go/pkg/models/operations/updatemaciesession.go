package operations



type UpdateMacieSessionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum string

const (
    UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnumFifteenMinutes UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum = "FIFTEEN_MINUTES"
UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnumOneHour UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum = "ONE_HOUR"
UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnumSixHours UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum = "SIX_HOURS"
)



type UpdateMacieSessionRequestBodyStatusEnum string

const (
    UpdateMacieSessionRequestBodyStatusEnumPaused UpdateMacieSessionRequestBodyStatusEnum = "PAUSED"
UpdateMacieSessionRequestBodyStatusEnumEnabled UpdateMacieSessionRequestBodyStatusEnum = "ENABLED"
)


type UpdateMacieSessionRequestBody struct {
    FindingPublishingFrequency *UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum `json:"findingPublishingFrequency,omitempty"`
    Status *UpdateMacieSessionRequestBodyStatusEnum `json:"status,omitempty"`
    
}

type UpdateMacieSessionRequest struct {
    Headers UpdateMacieSessionHeaders 
    Request UpdateMacieSessionRequestBody `request:"mediaType=application/json"`
    
}

type UpdateMacieSessionResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateMacieSessionResponse map[string]interface{} 
    ValidationException *interface{} 
    
}

