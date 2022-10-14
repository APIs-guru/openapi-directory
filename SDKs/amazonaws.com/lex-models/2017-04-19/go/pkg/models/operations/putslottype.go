package operations

import (
	"openapi/pkg/models/shared"
)

type PutSlotTypePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PutSlotTypeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutSlotTypeRequestBodyValueSelectionStrategyEnum string

const (
	PutSlotTypeRequestBodyValueSelectionStrategyEnumOriginalValue PutSlotTypeRequestBodyValueSelectionStrategyEnum = "ORIGINAL_VALUE"
	PutSlotTypeRequestBodyValueSelectionStrategyEnumTopResolution PutSlotTypeRequestBodyValueSelectionStrategyEnum = "TOP_RESOLUTION"
)

type PutSlotTypeRequestBody struct {
	Checksum                *string                                           `json:"checksum,omitempty"`
	CreateVersion           *bool                                             `json:"createVersion,omitempty"`
	Description             *string                                           `json:"description,omitempty"`
	EnumerationValues       []shared.EnumerationValue                         `json:"enumerationValues,omitempty"`
	ParentSlotTypeSignature *string                                           `json:"parentSlotTypeSignature,omitempty"`
	SlotTypeConfigurations  []shared.SlotTypeConfiguration                    `json:"slotTypeConfigurations,omitempty"`
	ValueSelectionStrategy  *PutSlotTypeRequestBodyValueSelectionStrategyEnum `json:"valueSelectionStrategy,omitempty"`
}

type PutSlotTypeRequest struct {
	PathParams PutSlotTypePathParams
	Headers    PutSlotTypeHeaders
	Request    PutSlotTypeRequestBody `request:"mediaType=application/json"`
}

type PutSlotTypeResponse struct {
	BadRequestException         *interface{}
	ConflictException           *interface{}
	ContentType                 string
	InternalFailureException    *interface{}
	LimitExceededException      *interface{}
	PreconditionFailedException *interface{}
	PutSlotTypeResponse         *shared.PutSlotTypeResponse
	StatusCode                  int64
}
