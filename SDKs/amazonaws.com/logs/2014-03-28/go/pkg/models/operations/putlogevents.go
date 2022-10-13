package operations

import (
	"openapi/pkg/models/shared"
)

type PutLogEventsXAmzTargetEnum string

const (
	PutLogEventsXAmzTargetEnumLogs20140328PutLogEvents PutLogEventsXAmzTargetEnum = "Logs_20140328.PutLogEvents"
)

type PutLogEventsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutLogEventsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutLogEventsRequest struct {
	Headers PutLogEventsHeaders
	Request shared.PutLogEventsRequest `request:"mediaType=application/json"`
}

type PutLogEventsResponse struct {
	ContentType                   string
	DataAlreadyAcceptedException  *interface{}
	InvalidParameterException     *interface{}
	InvalidSequenceTokenException *interface{}
	PutLogEventsResponse          *shared.PutLogEventsResponse
	ResourceNotFoundException     *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
	UnrecognizedClientException   *interface{}
}
