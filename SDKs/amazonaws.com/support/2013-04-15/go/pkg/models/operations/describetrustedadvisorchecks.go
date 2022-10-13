package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTrustedAdvisorChecksXAmzTargetEnum string

const (
	DescribeTrustedAdvisorChecksXAmzTargetEnumAwsSupport20130415DescribeTrustedAdvisorChecks DescribeTrustedAdvisorChecksXAmzTargetEnum = "AWSSupport_20130415.DescribeTrustedAdvisorChecks"
)

type DescribeTrustedAdvisorChecksHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTrustedAdvisorChecksXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTrustedAdvisorChecksRequest struct {
	Headers DescribeTrustedAdvisorChecksHeaders
	Request shared.DescribeTrustedAdvisorChecksRequest `request:"mediaType=application/json"`
}

type DescribeTrustedAdvisorChecksResponse struct {
	ContentType                          string
	DescribeTrustedAdvisorChecksResponse *shared.DescribeTrustedAdvisorChecksResponse
	InternalServerError                  *interface{}
	StatusCode                           int64
}
