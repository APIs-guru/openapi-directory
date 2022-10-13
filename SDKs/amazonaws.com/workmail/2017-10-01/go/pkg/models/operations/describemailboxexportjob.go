package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMailboxExportJobXAmzTargetEnum string

const (
	DescribeMailboxExportJobXAmzTargetEnumWorkMailServiceDescribeMailboxExportJob DescribeMailboxExportJobXAmzTargetEnum = "WorkMailService.DescribeMailboxExportJob"
)

type DescribeMailboxExportJobHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMailboxExportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeMailboxExportJobRequest struct {
	Headers DescribeMailboxExportJobHeaders
	Request shared.DescribeMailboxExportJobRequest `request:"mediaType=application/json"`
}

type DescribeMailboxExportJobResponse struct {
	ContentType                      string
	DescribeMailboxExportJobResponse *shared.DescribeMailboxExportJobResponse
	EntityNotFoundException          *interface{}
	InvalidParameterException        *interface{}
	OrganizationNotFoundException    *interface{}
	OrganizationStateException       *interface{}
	StatusCode                       int64
}
