package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSlotPathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
	IntentID   string `pathParam:"style=simple,explode=false,name=intentId"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
}

type CreateSlotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateSlotRequestBodyMultipleValuesSetting struct {
	AllowMultipleValues *bool `json:"allowMultipleValues,omitempty"`
}

type CreateSlotRequestBodyObfuscationSetting struct {
	ObfuscationSettingType *shared.ObfuscationSettingTypeEnum `json:"obfuscationSettingType,omitempty"`
}

type CreateSlotRequestBodyValueElicitationSetting struct {
	DefaultValueSpecification    *shared.SlotDefaultValueSpecification `json:"defaultValueSpecification,omitempty"`
	PromptSpecification          *shared.PromptSpecification           `json:"promptSpecification,omitempty"`
	SampleUtterances             []shared.SampleUtterance              `json:"sampleUtterances,omitempty"`
	SlotConstraint               *shared.SlotConstraintEnum            `json:"slotConstraint,omitempty"`
	WaitAndContinueSpecification *shared.WaitAndContinueSpecification  `json:"waitAndContinueSpecification,omitempty"`
}

type CreateSlotRequestBody struct {
	Description             *string                                      `json:"description,omitempty"`
	MultipleValuesSetting   *CreateSlotRequestBodyMultipleValuesSetting  `json:"multipleValuesSetting,omitempty"`
	ObfuscationSetting      *CreateSlotRequestBodyObfuscationSetting     `json:"obfuscationSetting,omitempty"`
	SlotName                string                                       `json:"slotName"`
	SlotTypeID              string                                       `json:"slotTypeId"`
	ValueElicitationSetting CreateSlotRequestBodyValueElicitationSetting `json:"valueElicitationSetting"`
}

type CreateSlotRequest struct {
	PathParams CreateSlotPathParams
	Headers    CreateSlotHeaders
	Request    CreateSlotRequestBody `request:"mediaType=application/json"`
}

type CreateSlotResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	CreateSlotResponse            *shared.CreateSlotResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
