package operations

import (
	"openapi/pkg/models/shared"
)

type ListClusterJobsXAmzTargetEnum string

const (
	ListClusterJobsXAmzTargetEnumAwsieSnowballJobManagementServiceListClusterJobs ListClusterJobsXAmzTargetEnum = "AWSIESnowballJobManagementService.ListClusterJobs"
)

type ListClusterJobsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListClusterJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListClusterJobsRequest struct {
	Headers ListClusterJobsHeaders
	Request shared.ListClusterJobsRequest `request:"mediaType=application/json"`
}

type ListClusterJobsResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	InvalidResourceException  *interface{}
	ListClusterJobsResult     *shared.ListClusterJobsResult
	StatusCode                int64
}
