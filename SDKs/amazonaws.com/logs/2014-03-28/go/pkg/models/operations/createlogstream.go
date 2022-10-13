package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLogStreamXAmzTargetEnum string

const (
	CreateLogStreamXAmzTargetEnumLogs20140328CreateLogStream CreateLogStreamXAmzTargetEnum = "Logs_20140328.CreateLogStream"
)

type CreateLogStreamHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLogStreamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLogStreamRequest struct {
	Headers CreateLogStreamHeaders
	Request shared.CreateLogStreamRequest `request:"mediaType=application/json"`
}

type CreateLogStreamResponse struct {
	ContentType                    string
	InvalidParameterException      *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
