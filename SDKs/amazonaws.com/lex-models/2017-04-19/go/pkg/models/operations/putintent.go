package operations

import (
"openapi/pkg/models/shared")

type PutIntentPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PutIntentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutIntentRequestBodyConclusionStatement struct {
    Messages []shared.Message `json:"messages,omitempty"`
    ResponseCard *string `json:"responseCard,omitempty"`
    
}

type PutIntentRequestBodyConfirmationPrompt struct {
    MaxAttempts *int64 `json:"maxAttempts,omitempty"`
    Messages []shared.Message `json:"messages,omitempty"`
    ResponseCard *string `json:"responseCard,omitempty"`
    
}

type PutIntentRequestBodyDialogCodeHook struct {
    MessageVersion *string `json:"messageVersion,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type PutIntentRequestBodyFollowUpPrompt struct {
    Prompt *shared.Prompt `json:"prompt,omitempty"`
    RejectionStatement *shared.Statement `json:"rejectionStatement,omitempty"`
    
}

type PutIntentRequestBodyFulfillmentActivity struct {
    CodeHook *shared.CodeHook `json:"codeHook,omitempty"`
    Type *shared.FulfillmentActivityTypeEnum `json:"type,omitempty"`
    
}

type PutIntentRequestBodyKendraConfiguration struct {
    KendraIndex *string `json:"kendraIndex,omitempty"`
    QueryFilterString *string `json:"queryFilterString,omitempty"`
    Role *string `json:"role,omitempty"`
    
}

type PutIntentRequestBodyRejectionStatement struct {
    Messages []shared.Message `json:"messages,omitempty"`
    ResponseCard *string `json:"responseCard,omitempty"`
    
}

type PutIntentRequestBody struct {
    Checksum *string `json:"checksum,omitempty"`
    ConclusionStatement *PutIntentRequestBodyConclusionStatement `json:"conclusionStatement,omitempty"`
    ConfirmationPrompt *PutIntentRequestBodyConfirmationPrompt `json:"confirmationPrompt,omitempty"`
    CreateVersion *bool `json:"createVersion,omitempty"`
    Description *string `json:"description,omitempty"`
    DialogCodeHook *PutIntentRequestBodyDialogCodeHook `json:"dialogCodeHook,omitempty"`
    FollowUpPrompt *PutIntentRequestBodyFollowUpPrompt `json:"followUpPrompt,omitempty"`
    FulfillmentActivity *PutIntentRequestBodyFulfillmentActivity `json:"fulfillmentActivity,omitempty"`
    InputContexts []shared.InputContext `json:"inputContexts,omitempty"`
    KendraConfiguration *PutIntentRequestBodyKendraConfiguration `json:"kendraConfiguration,omitempty"`
    OutputContexts []shared.OutputContext `json:"outputContexts,omitempty"`
    ParentIntentSignature *string `json:"parentIntentSignature,omitempty"`
    RejectionStatement *PutIntentRequestBodyRejectionStatement `json:"rejectionStatement,omitempty"`
    SampleUtterances []string `json:"sampleUtterances,omitempty"`
    Slots []shared.Slot `json:"slots,omitempty"`
    
}

type PutIntentRequest struct {
    PathParams PutIntentPathParams 
    Headers PutIntentHeaders 
    Request PutIntentRequestBody `request:"mediaType=application/json"`
    
}

type PutIntentResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    PreconditionFailedException *interface{} 
    PutIntentResponse *shared.PutIntentResponse 
    StatusCode int64 
    
}

