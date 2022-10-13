package operations

import (
	"openapi/pkg/models/shared"
)

type PutDestinationXAmzTargetEnum string

const (
	PutDestinationXAmzTargetEnumLogs20140328PutDestination PutDestinationXAmzTargetEnum = "Logs_20140328.PutDestination"
)

type PutDestinationHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutDestinationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutDestinationRequest struct {
	Headers PutDestinationHeaders
	Request shared.PutDestinationRequest `request:"mediaType=application/json"`
}

type PutDestinationResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	OperationAbortedException   *interface{}
	PutDestinationResponse      *shared.PutDestinationResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
