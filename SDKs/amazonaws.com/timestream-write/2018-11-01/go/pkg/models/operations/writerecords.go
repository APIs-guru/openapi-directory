package operations

import (
	"openapi/pkg/models/shared"
)

type WriteRecordsXAmzTargetEnum string

const (
	WriteRecordsXAmzTargetEnumTimestream20181101WriteRecords WriteRecordsXAmzTargetEnum = "Timestream_20181101.WriteRecords"
)

type WriteRecordsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        WriteRecordsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type WriteRecordsRequest struct {
	Headers WriteRecordsHeaders
	Request shared.WriteRecordsRequest `request:"mediaType=application/json"`
}

type WriteRecordsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	InvalidEndpointException  *interface{}
	RejectedRecordsException  *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
