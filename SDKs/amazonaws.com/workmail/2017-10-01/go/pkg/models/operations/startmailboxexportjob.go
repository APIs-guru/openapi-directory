package operations

import (
	"openapi/pkg/models/shared"
)

type StartMailboxExportJobXAmzTargetEnum string

const (
	StartMailboxExportJobXAmzTargetEnumWorkMailServiceStartMailboxExportJob StartMailboxExportJobXAmzTargetEnum = "WorkMailService.StartMailboxExportJob"
)

type StartMailboxExportJobHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartMailboxExportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartMailboxExportJobRequest struct {
	Headers StartMailboxExportJobHeaders
	Request shared.StartMailboxExportJobRequest `request:"mediaType=application/json"`
}

type StartMailboxExportJobResponse struct {
	ContentType                   string
	EntityNotFoundException       *interface{}
	InvalidParameterException     *interface{}
	LimitExceededException        *interface{}
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StartMailboxExportJobResponse *shared.StartMailboxExportJobResponse
	StatusCode                    int64
}
