package operations

import (
	"openapi/pkg/models/shared"
)

type ListMailboxExportJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListMailboxExportJobsXAmzTargetEnum string

const (
	ListMailboxExportJobsXAmzTargetEnumWorkMailServiceListMailboxExportJobs ListMailboxExportJobsXAmzTargetEnum = "WorkMailService.ListMailboxExportJobs"
)

type ListMailboxExportJobsHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListMailboxExportJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListMailboxExportJobsRequest struct {
	QueryParams ListMailboxExportJobsQueryParams
	Headers     ListMailboxExportJobsHeaders
	Request     shared.ListMailboxExportJobsRequest `request:"mediaType=application/json"`
}

type ListMailboxExportJobsResponse struct {
	ContentType                   string
	InvalidParameterException     *interface{}
	ListMailboxExportJobsResponse *shared.ListMailboxExportJobsResponse
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
}
