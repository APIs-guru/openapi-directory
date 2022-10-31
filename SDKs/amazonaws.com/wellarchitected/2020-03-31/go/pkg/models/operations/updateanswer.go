package operations

import (
"openapi/pkg/models/shared")

type UpdateAnswerPathParams struct {
    LensAlias string `pathParam:"style=simple,explode=false,name=LensAlias"`
    QuestionID string `pathParam:"style=simple,explode=false,name=QuestionId"`
    WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
    
}

type UpdateAnswerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateAnswerRequestBodyReasonEnum string

const (
    UpdateAnswerRequestBodyReasonEnumOutOfScope UpdateAnswerRequestBodyReasonEnum = "OUT_OF_SCOPE"
UpdateAnswerRequestBodyReasonEnumBusinessPriorities UpdateAnswerRequestBodyReasonEnum = "BUSINESS_PRIORITIES"
UpdateAnswerRequestBodyReasonEnumArchitectureConstraints UpdateAnswerRequestBodyReasonEnum = "ARCHITECTURE_CONSTRAINTS"
UpdateAnswerRequestBodyReasonEnumOther UpdateAnswerRequestBodyReasonEnum = "OTHER"
UpdateAnswerRequestBodyReasonEnumNone UpdateAnswerRequestBodyReasonEnum = "NONE"
)


type UpdateAnswerRequestBody struct {
    ChoiceUpdates map[string]shared.ChoiceUpdate `json:"ChoiceUpdates,omitempty"`
    IsApplicable *bool `json:"IsApplicable,omitempty"`
    Notes *string `json:"Notes,omitempty"`
    Reason *UpdateAnswerRequestBodyReasonEnum `json:"Reason,omitempty"`
    SelectedChoices []string `json:"SelectedChoices,omitempty"`
    
}

type UpdateAnswerRequest struct {
    PathParams UpdateAnswerPathParams 
    Headers UpdateAnswerHeaders 
    Request UpdateAnswerRequestBody `request:"mediaType=application/json"`
    
}

type UpdateAnswerResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateAnswerOutput *shared.UpdateAnswerOutput 
    ValidationException *interface{} 
    
}

