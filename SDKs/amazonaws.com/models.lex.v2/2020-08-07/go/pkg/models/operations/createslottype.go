package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSlotTypePathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
}

type CreateSlotTypeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateSlotTypeRequestBodyValueSelectionSetting struct {
	RegexFilter        *shared.SlotValueRegexFilter            `json:"regexFilter,omitempty"`
	ResolutionStrategy *shared.SlotValueResolutionStrategyEnum `json:"resolutionStrategy,omitempty"`
}

type CreateSlotTypeRequestBody struct {
	Description             *string                                        `json:"description,omitempty"`
	ParentSlotTypeSignature *string                                        `json:"parentSlotTypeSignature,omitempty"`
	SlotTypeName            string                                         `json:"slotTypeName"`
	SlotTypeValues          []shared.SlotTypeValue                         `json:"slotTypeValues,omitempty"`
	ValueSelectionSetting   CreateSlotTypeRequestBodyValueSelectionSetting `json:"valueSelectionSetting"`
}

type CreateSlotTypeRequest struct {
	PathParams CreateSlotTypePathParams
	Headers    CreateSlotTypeHeaders
	Request    CreateSlotTypeRequestBody `request:"mediaType=application/json"`
}

type CreateSlotTypeResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	CreateSlotTypeResponse        *shared.CreateSlotTypeResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
