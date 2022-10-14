package operations

import (
	"openapi/pkg/models/shared"
)

type CreateExportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateExportRequestBodyFileFormatEnum string

const (
	CreateExportRequestBodyFileFormatEnumLexJSON CreateExportRequestBodyFileFormatEnum = "LexJson"
)

type CreateExportRequestBodyResourceSpecification struct {
	BotExportSpecification       *shared.BotExportSpecification       `json:"botExportSpecification,omitempty"`
	BotLocaleExportSpecification *shared.BotLocaleExportSpecification `json:"botLocaleExportSpecification,omitempty"`
}

type CreateExportRequestBody struct {
	FileFormat            CreateExportRequestBodyFileFormatEnum        `json:"fileFormat"`
	FilePassword          *string                                      `json:"filePassword,omitempty"`
	ResourceSpecification CreateExportRequestBodyResourceSpecification `json:"resourceSpecification"`
}

type CreateExportRequest struct {
	Headers CreateExportHeaders
	Request CreateExportRequestBody `request:"mediaType=application/json"`
}

type CreateExportResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	CreateExportResponse          *shared.CreateExportResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
