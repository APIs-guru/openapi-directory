package operations

import (
	"openapi/pkg/models/shared"
)

type StartMailboxExportJobXAmzTargetEnum string

const (
	StartMailboxExportJobXAmzTargetEnumWorkMailServiceStartMailboxExportJob StartMailboxExportJobXAmzTargetEnum = "WorkMailService.StartMailboxExportJob"
)

type StartMailboxExportJobHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartMailboxExportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
