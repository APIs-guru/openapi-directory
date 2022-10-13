package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTableXAmzTargetEnum string

const (
	CreateTableXAmzTargetEnumTimestream20181101CreateTable CreateTableXAmzTargetEnum = "Timestream_20181101.CreateTable"
)

type CreateTableHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateTableRequest struct {
	Headers CreateTableHeaders
	Request shared.CreateTableRequest `request:"mediaType=application/json"`
}

type CreateTableResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateTableResponse           *shared.CreateTableResponse
	InternalServerException       *interface{}
	InvalidEndpointException      *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
