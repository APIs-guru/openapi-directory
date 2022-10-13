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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSlotTypeRequestBodyValueSelectionSetting struct {
	RegexFilter        *shared.SlotValueRegexFilter            `json:"regexFilter"`
	ResolutionStrategy *shared.SlotValueResolutionStrategyEnum `json:"resolutionStrategy"`
}

type UpdateSlotTypeRequestBody struct {
	Description             *string                                        `json:"description"`
	ParentSlotTypeSignature *string                                        `json:"parentSlotTypeSignature"`
	SlotTypeName            string                                         `json:"slotTypeName"`
	SlotTypeValues          []shared.SlotTypeValue                         `json:"slotTypeValues"`
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
