package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIntentPathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
	IntentID   string `pathParam:"style=simple,explode=false,name=intentId"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
}

type UpdateIntentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateIntentRequestBodyDialogCodeHook
// Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
type UpdateIntentRequestBodyDialogCodeHook struct {
	Enabled *bool `json:"enabled,omitempty"`
}

// UpdateIntentRequestBodyFulfillmentCodeHook
// Determines if a Lambda function should be invoked for a specific intent.
type UpdateIntentRequestBodyFulfillmentCodeHook struct {
	Enabled *bool `json:"enabled,omitempty"`
}

// UpdateIntentRequestBodyIntentClosingSetting
// Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
type UpdateIntentRequestBodyIntentClosingSetting struct {
	Active          *bool                         `json:"active,omitempty"`
	ClosingResponse *shared.ResponseSpecification `json:"closingResponse,omitempty"`
}

// UpdateIntentRequestBodyIntentConfirmationSetting
// Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
type UpdateIntentRequestBodyIntentConfirmationSetting struct {
	Active              *bool                         `json:"active,omitempty"`
	DeclinationResponse *shared.ResponseSpecification `json:"declinationResponse,omitempty"`
	PromptSpecification *shared.PromptSpecification   `json:"promptSpecification,omitempty"`
}

// UpdateIntentRequestBodyKendraConfiguration
// Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
type UpdateIntentRequestBodyKendraConfiguration struct {
	KendraIndex              *string `json:"kendraIndex,omitempty"`
	QueryFilterString        *string `json:"queryFilterString,omitempty"`
	QueryFilterStringEnabled *bool   `json:"queryFilterStringEnabled,omitempty"`
}

type UpdateIntentRequestBody struct {
	Description               *string                                           `json:"description,omitempty"`
	DialogCodeHook            *UpdateIntentRequestBodyDialogCodeHook            `json:"dialogCodeHook,omitempty"`
	FulfillmentCodeHook       *UpdateIntentRequestBodyFulfillmentCodeHook       `json:"fulfillmentCodeHook,omitempty"`
	InputContexts             []shared.InputContext                             `json:"inputContexts,omitempty"`
	IntentClosingSetting      *UpdateIntentRequestBodyIntentClosingSetting      `json:"intentClosingSetting,omitempty"`
	IntentConfirmationSetting *UpdateIntentRequestBodyIntentConfirmationSetting `json:"intentConfirmationSetting,omitempty"`
	IntentName                string                                            `json:"intentName"`
	KendraConfiguration       *UpdateIntentRequestBodyKendraConfiguration       `json:"kendraConfiguration,omitempty"`
	OutputContexts            []shared.OutputContext                            `json:"outputContexts,omitempty"`
	ParentIntentSignature     *string                                           `json:"parentIntentSignature,omitempty"`
	SampleUtterances          []shared.SampleUtterance                          `json:"sampleUtterances,omitempty"`
	SlotPriorities            []shared.SlotPriority                             `json:"slotPriorities,omitempty"`
}

type UpdateIntentRequest struct {
	PathParams UpdateIntentPathParams
	Headers    UpdateIntentHeaders
	Request    UpdateIntentRequestBody `request:"mediaType=application/json"`
}

type UpdateIntentResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateIntentResponse          *shared.UpdateIntentResponse
	ValidationException           *interface{}
}
