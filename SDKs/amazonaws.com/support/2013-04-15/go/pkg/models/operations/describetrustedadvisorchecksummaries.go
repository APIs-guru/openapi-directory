package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum string

const (
	DescribeTrustedAdvisorCheckSummariesXAmzTargetEnumAwsSupport20130415DescribeTrustedAdvisorCheckSummaries DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum = "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries"
)

type DescribeTrustedAdvisorCheckSummariesHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTrustedAdvisorCheckSummariesRequest struct {
	Headers DescribeTrustedAdvisorCheckSummariesHeaders
	Request shared.DescribeTrustedAdvisorCheckSummariesRequest `request:"mediaType=application/json"`
}

type DescribeTrustedAdvisorCheckSummariesResponse struct {
	ContentType                                  string
	DescribeTrustedAdvisorCheckSummariesResponse *shared.DescribeTrustedAdvisorCheckSummariesResponse
	InternalServerError                          *interface{}
	StatusCode                                   int64
}
