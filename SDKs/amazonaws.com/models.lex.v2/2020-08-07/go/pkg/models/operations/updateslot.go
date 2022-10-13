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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSlotRequestBodyMultipleValuesSetting struct {
	AllowMultipleValues *bool `json:"allowMultipleValues"`
}

type UpdateSlotRequestBodyObfuscationSetting struct {
	ObfuscationSettingType *shared.ObfuscationSettingTypeEnum `json:"obfuscationSettingType"`
}

type UpdateSlotRequestBodyValueElicitationSetting struct {
	DefaultValueSpecification    *shared.SlotDefaultValueSpecification `json:"defaultValueSpecification"`
	PromptSpecification          *shared.PromptSpecification           `json:"promptSpecification"`
	SampleUtterances             []shared.SampleUtterance              `json:"sampleUtterances"`
	SlotConstraint               *shared.SlotConstraintEnum            `json:"slotConstraint"`
	WaitAndContinueSpecification *shared.WaitAndContinueSpecification  `json:"waitAndContinueSpecification"`
}

type UpdateSlotRequestBody struct {
	Description             *string                                      `json:"description"`
	MultipleValuesSetting   *UpdateSlotRequestBodyMultipleValuesSetting  `json:"multipleValuesSetting"`
	ObfuscationSetting      *UpdateSlotRequestBodyObfuscationSetting     `json:"obfuscationSetting"`
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
