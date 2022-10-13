package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDestinationXAmzTargetEnum string

const (
	DeleteDestinationXAmzTargetEnumLogs20140328DeleteDestination DeleteDestinationXAmzTargetEnum = "Logs_20140328.DeleteDestination"
)

type DeleteDestinationHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDestinationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDestinationRequest struct {
	Headers DeleteDestinationHeaders
	Request shared.DeleteDestinationRequest `request:"mediaType=application/json"`
}

type DeleteDestinationResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	OperationAbortedException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
