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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSlotRequestBodyMultipleValuesSetting struct {
	AllowMultipleValues *bool `json:"allowMultipleValues"`
}

type CreateSlotRequestBodyObfuscationSetting struct {
	ObfuscationSettingType *shared.ObfuscationSettingTypeEnum `json:"obfuscationSettingType"`
}

type CreateSlotRequestBodyValueElicitationSetting struct {
	DefaultValueSpecification    *shared.SlotDefaultValueSpecification `json:"defaultValueSpecification"`
	PromptSpecification          *shared.PromptSpecification           `json:"promptSpecification"`
	SampleUtterances             []shared.SampleUtterance              `json:"sampleUtterances"`
	SlotConstraint               *shared.SlotConstraintEnum            `json:"slotConstraint"`
	WaitAndContinueSpecification *shared.WaitAndContinueSpecification  `json:"waitAndContinueSpecification"`
}

type CreateSlotRequestBody struct {
	Description             *string                                      `json:"description"`
	MultipleValuesSetting   *CreateSlotRequestBodyMultipleValuesSetting  `json:"multipleValuesSetting"`
	ObfuscationSetting      *CreateSlotRequestBodyObfuscationSetting     `json:"obfuscationSetting"`
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
