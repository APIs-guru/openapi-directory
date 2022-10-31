package operations

import (
	"openapi/pkg/models/shared"
)

type ListTransformJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTransformJobsXAmzTargetEnum string

const (
	ListTransformJobsXAmzTargetEnumSageMakerListTransformJobs ListTransformJobsXAmzTargetEnum = "SageMaker.ListTransformJobs"
)

type ListTransformJobsHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTransformJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTransformJobsRequest struct {
	QueryParams ListTransformJobsQueryParams
	Headers     ListTransformJobsHeaders
	Request     shared.ListTransformJobsRequest `request:"mediaType=application/json"`
}

type ListTransformJobsResponse struct {
	ContentType               string
	ListTransformJobsResponse *shared.ListTransformJobsResponse
	StatusCode                int64
}
