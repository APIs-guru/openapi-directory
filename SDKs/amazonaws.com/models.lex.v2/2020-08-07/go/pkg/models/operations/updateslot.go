package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSlotPathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
	IntentID   string `pathParam:"style=simple,explode=false,name=intentId"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
	SlotID     string `pathParam:"style=simple,explode=false,name=slotId"`
}

type UpdateSlotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateSlotRequestBodyMultipleValuesSetting
// Indicates whether a slot can return multiple values.
type UpdateSlotRequestBodyMultipleValuesSetting struct {
	AllowMultipleValues *bool `json:"allowMultipleValues,omitempty"`
}

// UpdateSlotRequestBodyObfuscationSetting
// Determines whether Amazon Lex obscures slot values in conversation logs.
type UpdateSlotRequestBodyObfuscationSetting struct {
	ObfuscationSettingType *shared.ObfuscationSettingTypeEnum `json:"obfuscationSettingType,omitempty"`
}

// UpdateSlotRequestBodyValueElicitationSetting
// Settings that you can use for eliciting a slot value.
type UpdateSlotRequestBodyValueElicitationSetting struct {
	DefaultValueSpecification    *shared.SlotDefaultValueSpecification `json:"defaultValueSpecification,omitempty"`
	PromptSpecification          *shared.PromptSpecification           `json:"promptSpecification,omitempty"`
	SampleUtterances             []shared.SampleUtterance              `json:"sampleUtterances,omitempty"`
	SlotConstraint               *shared.SlotConstraintEnum            `json:"slotConstraint,omitempty"`
	WaitAndContinueSpecification *shared.WaitAndContinueSpecification  `json:"waitAndContinueSpecification,omitempty"`
}

type UpdateSlotRequestBody struct {
	Description             *string                                      `json:"description,omitempty"`
	MultipleValuesSetting   *UpdateSlotRequestBodyMultipleValuesSetting  `json:"multipleValuesSetting,omitempty"`
	ObfuscationSetting      *UpdateSlotRequestBodyObfuscationSetting     `json:"obfuscationSetting,omitempty"`
	SlotName                string                                       `json:"slotName"`
	SlotTypeID              string                                       `json:"slotTypeId"`
	ValueElicitationSetting UpdateSlotRequestBodyValueElicitationSetting `json:"valueElicitationSetting"`
}

type UpdateSlotRequest struct {
	PathParams UpdateSlotPathParams
	Headers    UpdateSlotHeaders
	Request    UpdateSlotRequestBody `request:"mediaType=application/json"`
}

type UpdateSlotResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateSlotResponse            *shared.UpdateSlotResponse
	ValidationException           *interface{}
}
