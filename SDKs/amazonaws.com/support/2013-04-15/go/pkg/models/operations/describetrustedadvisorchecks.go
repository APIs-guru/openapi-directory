package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTrustedAdvisorChecksXAmzTargetEnum string

const (
	DescribeTrustedAdvisorChecksXAmzTargetEnumAwsSupport20130415DescribeTrustedAdvisorChecks DescribeTrustedAdvisorChecksXAmzTargetEnum = "AWSSupport_20130415.DescribeTrustedAdvisorChecks"
)

type DescribeTrustedAdvisorChecksHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTrustedAdvisorChecksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
