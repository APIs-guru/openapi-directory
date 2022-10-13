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
	Enabled *bool `json:"enabled"`
}

type UpdateIntentRequestBodyFulfillmentCodeHook struct {
	Enabled *bool `json:"enabled"`
}

type UpdateIntentRequestBodyIntentClosingSetting struct {
	Active          *bool                         `json:"active"`
	ClosingResponse *shared.ResponseSpecification `json:"closingResponse"`
}

type UpdateIntentRequestBodyIntentConfirmationSetting struct {
	Active              *bool                         `json:"active"`
	DeclinationResponse *shared.ResponseSpecification `json:"declinationResponse"`
	PromptSpecification *shared.PromptSpecification   `json:"promptSpecification"`
}

type UpdateIntentRequestBodyKendraConfiguration struct {
	KendraIndex              *string `json:"kendraIndex"`
	QueryFilterString        *string `json:"queryFilterString"`
	QueryFilterStringEnabled *bool   `json:"queryFilterStringEnabled"`
}

type UpdateIntentRequestBody struct {
	Description               *string                                           `json:"description"`
	DialogCodeHook            *UpdateIntentRequestBodyDialogCodeHook            `json:"dialogCodeHook"`
	FulfillmentCodeHook       *UpdateIntentRequestBodyFulfillmentCodeHook       `json:"fulfillmentCodeHook"`
	InputContexts             []shared.InputContext                             `json:"inputContexts"`
	IntentClosingSetting      *UpdateIntentRequestBodyIntentClosingSetting      `json:"intentClosingSetting"`
	IntentConfirmationSetting *UpdateIntentRequestBodyIntentConfirmationSetting `json:"intentConfirmationSetting"`
	IntentName                string                                            `json:"intentName"`
	KendraConfiguration       *UpdateIntentRequestBodyKendraConfiguration       `json:"kendraConfiguration"`
	OutputContexts            []shared.OutputContext                            `json:"outputContexts"`
	ParentIntentSignature     *string                                           `json:"parentIntentSignature"`
	SampleUtterances          []shared.SampleUtterance                          `json:"sampleUtterances"`
	SlotPriorities            []shared.SlotPriority                             `json:"slotPriorities"`
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
