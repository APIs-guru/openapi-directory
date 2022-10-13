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
	StartImportRequestBodyMergeStrategyEnumOverwrite      StartImportRequestBodyMergeStrategyEnum = "Overwrite"
	StartImportRequestBodyMergeStrategyEnumFailOnConflict StartImportRequestBodyMergeStrategyEnum = "FailOnConflict"
)

type StartImportRequestBodyResourceSpecification struct {
	BotImportSpecification       *shared.BotImportSpecification       `json:"botImportSpecification"`
	BotLocaleImportSpecification *shared.BotLocaleImportSpecification `json:"botLocaleImportSpecification"`
}

type StartImportRequestBody struct {
	FilePassword          *string                                     `json:"filePassword"`
	ImportID              string                                      `json:"importId"`
	MergeStrategy         StartImportRequestBodyMergeStrategyEnum     `json:"mergeStrategy"`
	ResourceSpecification StartImportRequestBodyResourceSpecification `json:"resourceSpecification"`
}

type StartImportRequest struct {
	Headers StartImportHeaders
	Request StartImportRequestBody `request:"mediaType=application/json"`
}

type StartImportResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StartImportResponse           *shared.StartImportResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
