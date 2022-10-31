package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDatabaseXAmzTargetEnum string

const (
	CreateDatabaseXAmzTargetEnumTimestream20181101CreateDatabase CreateDatabaseXAmzTargetEnum = "Timestream_20181101.CreateDatabase"
)

type CreateDatabaseHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDatabaseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
