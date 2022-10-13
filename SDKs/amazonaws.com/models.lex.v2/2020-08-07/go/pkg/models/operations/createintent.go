package operations

import (
	"openapi/pkg/models/shared"
)

type CreateIntentPathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
}

type CreateIntentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateIntentRequestBodyDialogCodeHook struct {
	Enabled *bool `json:"enabled"`
}

type CreateIntentRequestBodyFulfillmentCodeHook struct {
	Enabled *bool `json:"enabled"`
}

type CreateIntentRequestBodyIntentClosingSetting struct {
	Active          *bool                         `json:"active"`
	ClosingResponse *shared.ResponseSpecification `json:"closingResponse"`
}

type CreateIntentRequestBodyIntentConfirmationSetting struct {
	Active              *bool                         `json:"active"`
	DeclinationResponse *shared.ResponseSpecification `json:"declinationResponse"`
	PromptSpecification *shared.PromptSpecification   `json:"promptSpecification"`
}

type CreateIntentRequestBodyKendraConfiguration struct {
	KendraIndex              *string `json:"kendraIndex"`
	QueryFilterString        *string `json:"queryFilterString"`
	QueryFilterStringEnabled *bool   `json:"queryFilterStringEnabled"`
}

type CreateIntentRequestBody struct {
	Description               *string                                           `json:"description"`
	DialogCodeHook            *CreateIntentRequestBodyDialogCodeHook            `json:"dialogCodeHook"`
	FulfillmentCodeHook       *CreateIntentRequestBodyFulfillmentCodeHook       `json:"fulfillmentCodeHook"`
	InputContexts             []shared.InputContext                             `json:"inputContexts"`
	IntentClosingSetting      *CreateIntentRequestBodyIntentClosingSetting      `json:"intentClosingSetting"`
	IntentConfirmationSetting *CreateIntentRequestBodyIntentConfirmationSetting `json:"intentConfirmationSetting"`
	IntentName                string                                            `json:"intentName"`
	KendraConfiguration       *CreateIntentRequestBodyKendraConfiguration       `json:"kendraConfiguration"`
	OutputContexts            []shared.OutputContext                            `json:"outputContexts"`
	ParentIntentSignature     *string                                           `json:"parentIntentSignature"`
	SampleUtterances          []shared.SampleUtterance                          `json:"sampleUtterances"`
}

type CreateIntentRequest struct {
	PathParams CreateIntentPathParams
	Headers    CreateIntentHeaders
	Request    CreateIntentRequestBody `request:"mediaType=application/json"`
}

type CreateIntentResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	CreateIntentResponse          *shared.CreateIntentResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
