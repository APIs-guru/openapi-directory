package operations

import (
"openapi/pkg/models/shared")

type CreateIntentPathParams struct {
    BotID string `pathParam:"style=simple,explode=false,name=botId"`
    BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
    LocaleID string `pathParam:"style=simple,explode=false,name=localeId"`
    
}

type CreateIntentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateIntentRequestBodyDialogCodeHook struct {
    Enabled *bool `json:"enabled,omitempty"`
    
}

type CreateIntentRequestBodyFulfillmentCodeHook struct {
    Enabled *bool `json:"enabled,omitempty"`
    
}

type CreateIntentRequestBodyIntentClosingSetting struct {
    Active *bool `json:"active,omitempty"`
    ClosingResponse *shared.ResponseSpecification `json:"closingResponse,omitempty"`
    
}

type CreateIntentRequestBodyIntentConfirmationSetting struct {
    Active *bool `json:"active,omitempty"`
    DeclinationResponse *shared.ResponseSpecification `json:"declinationResponse,omitempty"`
    PromptSpecification *shared.PromptSpecification `json:"promptSpecification,omitempty"`
    
}

type CreateIntentRequestBodyKendraConfiguration struct {
    KendraIndex *string `json:"kendraIndex,omitempty"`
    QueryFilterString *string `json:"queryFilterString,omitempty"`
    QueryFilterStringEnabled *bool `json:"queryFilterStringEnabled,omitempty"`
    
}

type CreateIntentRequestBody struct {
    Description *string `json:"description,omitempty"`
    DialogCodeHook *CreateIntentRequestBodyDialogCodeHook `json:"dialogCodeHook,omitempty"`
    FulfillmentCodeHook *CreateIntentRequestBodyFulfillmentCodeHook `json:"fulfillmentCodeHook,omitempty"`
    InputContexts []shared.InputContext `json:"inputContexts,omitempty"`
    IntentClosingSetting *CreateIntentRequestBodyIntentClosingSetting `json:"intentClosingSetting,omitempty"`
    IntentConfirmationSetting *CreateIntentRequestBodyIntentConfirmationSetting `json:"intentConfirmationSetting,omitempty"`
    IntentName string `json:"intentName"`
    KendraConfiguration *CreateIntentRequestBodyKendraConfiguration `json:"kendraConfiguration,omitempty"`
    OutputContexts []shared.OutputContext `json:"outputContexts,omitempty"`
    ParentIntentSignature *string `json:"parentIntentSignature,omitempty"`
    SampleUtterances []shared.SampleUtterance `json:"sampleUtterances,omitempty"`
    
}

type CreateIntentRequest struct {
    PathParams CreateIntentPathParams 
    Headers CreateIntentHeaders 
    Request CreateIntentRequestBody `request:"mediaType=application/json"`
    
}

type CreateIntentResponse struct {
    ConflictException *interface{} 
    ContentType string 
    CreateIntentResponse *shared.CreateIntentResponse 
    InternalServerException *interface{} 
    PreconditionFailedException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

