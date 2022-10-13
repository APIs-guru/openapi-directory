package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum string

const (
	DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnumAwsSupport20130415DescribeTrustedAdvisorCheckRefreshStatuses DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum = "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses"
)

type DescribeTrustedAdvisorCheckRefreshStatusesHeaders struct {
	XAmzAlgorithm     *string                                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTrustedAdvisorCheckRefreshStatusesRequest struct {
	Headers DescribeTrustedAdvisorCheckRefreshStatusesHeaders
	Request shared.DescribeTrustedAdvisorCheckRefreshStatusesRequest `request:"mediaType=application/json"`
}

type DescribeTrustedAdvisorCheckRefreshStatusesResponse struct {
	ContentType                                        string
	DescribeTrustedAdvisorCheckRefreshStatusesResponse *shared.DescribeTrustedAdvisorCheckRefreshStatusesResponse
	InternalServerError                                *interface{}
	StatusCode                                         int64
}
