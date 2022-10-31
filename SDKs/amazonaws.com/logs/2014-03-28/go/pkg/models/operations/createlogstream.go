package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLogStreamXAmzTargetEnum string

const (
	CreateLogStreamXAmzTargetEnumLogs20140328CreateLogStream CreateLogStreamXAmzTargetEnum = "Logs_20140328.CreateLogStream"
)

type CreateLogStreamHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLogStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
