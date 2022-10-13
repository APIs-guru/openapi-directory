package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDatabaseXAmzTargetEnum string

const (
	CreateDatabaseXAmzTargetEnumTimestream20181101CreateDatabase CreateDatabaseXAmzTargetEnum = "Timestream_20181101.CreateDatabase"
)

type CreateDatabaseHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDatabaseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDatabaseRequest struct {
	Headers CreateDatabaseHeaders
	Request shared.CreateDatabaseRequest `request:"mediaType=application/json"`
}

type CreateDatabaseResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateDatabaseResponse        *shared.CreateDatabaseResponse
	InternalServerException       *interface{}
	InvalidEndpointException      *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
