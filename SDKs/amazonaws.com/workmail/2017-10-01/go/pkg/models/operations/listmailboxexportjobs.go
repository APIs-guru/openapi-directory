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
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListMailboxExportJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
