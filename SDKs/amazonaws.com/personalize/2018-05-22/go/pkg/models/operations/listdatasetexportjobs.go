package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatasetExportJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListDatasetExportJobsXAmzTargetEnum string

const (
	ListDatasetExportJobsXAmzTargetEnumAmazonPersonalizeListDatasetExportJobs ListDatasetExportJobsXAmzTargetEnum = "AmazonPersonalize.ListDatasetExportJobs"
)

type ListDatasetExportJobsHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDatasetExportJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListDatasetExportJobsRequest struct {
	QueryParams ListDatasetExportJobsQueryParams
	Headers     ListDatasetExportJobsHeaders
	Request     shared.ListDatasetExportJobsRequest `request:"mediaType=application/json"`
}

type ListDatasetExportJobsResponse struct {
	ContentType                   string
	InvalidInputException         *interface{}
	InvalidNextTokenException     *interface{}
	ListDatasetExportJobsResponse *shared.ListDatasetExportJobsResponse
	StatusCode                    int64
}
