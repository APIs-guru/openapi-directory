package operations

import (
	"openapi/pkg/models/shared"
)

type CancelMailboxExportJobXAmzTargetEnum string

const (
	CancelMailboxExportJobXAmzTargetEnumWorkMailServiceCancelMailboxExportJob CancelMailboxExportJobXAmzTargetEnum = "WorkMailService.CancelMailboxExportJob"
)

type CancelMailboxExportJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelMailboxExportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
