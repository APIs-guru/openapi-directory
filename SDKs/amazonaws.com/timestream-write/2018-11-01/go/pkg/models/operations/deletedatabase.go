package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDatabaseXAmzTargetEnum string

const (
	DeleteDatabaseXAmzTargetEnumTimestream20181101DeleteDatabase DeleteDatabaseXAmzTargetEnum = "Timestream_20181101.DeleteDatabase"
)

type DeleteDatabaseHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDatabaseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDatabaseRequest struct {
	Headers DeleteDatabaseHeaders
	Request shared.DeleteDatabaseRequest `request:"mediaType=application/json"`
}

type DeleteDatabaseResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	InvalidEndpointException  *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
