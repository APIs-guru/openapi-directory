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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateIntentRequestBodyDialogCodeHook struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type UpdateIntentRequestBodyFulfillmentCodeHook struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type UpdateIntentRequestBodyIntentClosingSetting struct {
	Active          *bool                         `json:"active,omitempty"`
	ClosingResponse *shared.ResponseSpecification `json:"closingResponse,omitempty"`
}

type UpdateIntentRequestBodyIntentConfirmationSetting struct {
	Active              *bool                         `json:"active,omitempty"`
	DeclinationResponse *shared.ResponseSpecification `json:"declinationResponse,omitempty"`
	PromptSpecification *shared.PromptSpecification   `json:"promptSpecification,omitempty"`
}

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
