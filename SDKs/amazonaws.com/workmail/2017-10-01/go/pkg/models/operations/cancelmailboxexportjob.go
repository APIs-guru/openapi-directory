package operations

import (
	"openapi/pkg/models/shared"
)

type CancelMailboxExportJobXAmzTargetEnum string

const (
	CancelMailboxExportJobXAmzTargetEnumWorkMailServiceCancelMailboxExportJob CancelMailboxExportJobXAmzTargetEnum = "WorkMailService.CancelMailboxExportJob"
)

type CancelMailboxExportJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelMailboxExportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelMailboxExportJobRequest struct {
	Headers CancelMailboxExportJobHeaders
	Request shared.CancelMailboxExportJobRequest `request:"mediaType=application/json"`
}

type CancelMailboxExportJobResponse struct {
	CancelMailboxExportJobResponse map[string]interface{}
	ContentType                    string
	EntityNotFoundException        *interface{}
	InvalidParameterException      *interface{}
	OrganizationNotFoundException  *interface{}
	OrganizationStateException     *interface{}
	StatusCode                     int64
}
