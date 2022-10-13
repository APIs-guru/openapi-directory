package operations

import (
	"openapi/pkg/models/shared"
)

type StartImportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartImportRequestBodyMergeStrategyEnum string

const (
	StartImportRequestBodyMergeStrategyEnumOverwriteLatest StartImportRequestBodyMergeStrategyEnum = "OVERWRITE_LATEST"
	StartImportRequestBodyMergeStrategyEnumFailOnConflict  StartImportRequestBodyMergeStrategyEnum = "FAIL_ON_CONFLICT"
)

type StartImportRequestBodyResourceTypeEnum string

const (
	StartImportRequestBodyResourceTypeEnumBot      StartImportRequestBodyResourceTypeEnum = "BOT"
	StartImportRequestBodyResourceTypeEnumIntent   StartImportRequestBodyResourceTypeEnum = "INTENT"
	StartImportRequestBodyResourceTypeEnumSlotType StartImportRequestBodyResourceTypeEnum = "SLOT_TYPE"
)

type StartImportRequestBody struct {
	MergeStrategy StartImportRequestBodyMergeStrategyEnum `json:"mergeStrategy"`
	Payload       string                                  `json:"payload"`
	ResourceType  StartImportRequestBodyResourceTypeEnum  `json:"resourceType"`
	Tags          []shared.Tag                            `json:"tags"`
}

type StartImportRequest struct {
	Headers StartImportHeaders
	Request StartImportRequestBody `request:"mediaType=application/json"`
}

type StartImportResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	StartImportResponse      *shared.StartImportResponse
	StatusCode               int64
}
