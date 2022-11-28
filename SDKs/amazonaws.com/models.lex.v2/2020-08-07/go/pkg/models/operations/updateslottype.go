package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSlotTypePathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
	SlotTypeID string `pathParam:"style=simple,explode=false,name=slotTypeId"`
}

type UpdateSlotTypeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateSlotTypeRequestBodyValueSelectionSetting
// Contains settings used by Amazon Lex to select a slot value.
type UpdateSlotTypeRequestBodyValueSelectionSetting struct {
	RegexFilter        *shared.SlotValueRegexFilter            `json:"regexFilter,omitempty"`
	ResolutionStrategy *shared.SlotValueResolutionStrategyEnum `json:"resolutionStrategy,omitempty"`
}

type UpdateSlotTypeRequestBody struct {
	Description             *string                                        `json:"description,omitempty"`
	ParentSlotTypeSignature *string                                        `json:"parentSlotTypeSignature,omitempty"`
	SlotTypeName            string                                         `json:"slotTypeName"`
	SlotTypeValues          []shared.SlotTypeValue                         `json:"slotTypeValues,omitempty"`
	ValueSelectionSetting   UpdateSlotTypeRequestBodyValueSelectionSetting `json:"valueSelectionSetting"`
}

type UpdateSlotTypeRequest struct {
	PathParams UpdateSlotTypePathParams
	Headers    UpdateSlotTypeHeaders
	Request    UpdateSlotTypeRequestBody `request:"mediaType=application/json"`
}

type UpdateSlotTypeResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateSlotTypeResponse        *shared.UpdateSlotTypeResponse
	ValidationException           *interface{}
}
