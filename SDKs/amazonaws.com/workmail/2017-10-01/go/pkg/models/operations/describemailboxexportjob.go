package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMailboxExportJobXAmzTargetEnum string

const (
	DescribeMailboxExportJobXAmzTargetEnumWorkMailServiceDescribeMailboxExportJob DescribeMailboxExportJobXAmzTargetEnum = "WorkMailService.DescribeMailboxExportJob"
)

type DescribeMailboxExportJobHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMailboxExportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
