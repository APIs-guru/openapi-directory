package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTableXAmzTargetEnum string

const (
	UpdateTableXAmzTargetEnumTimestream20181101UpdateTable UpdateTableXAmzTargetEnum = "Timestream_20181101.UpdateTable"
)

type UpdateTableHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateTableRequest struct {
	Headers UpdateTableHeaders
	Request shared.UpdateTableRequest `request:"mediaType=application/json"`
}

type UpdateTableResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	InvalidEndpointException  *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateTableResponse       *shared.UpdateTableResponse
	ValidationException       *interface{}
}
