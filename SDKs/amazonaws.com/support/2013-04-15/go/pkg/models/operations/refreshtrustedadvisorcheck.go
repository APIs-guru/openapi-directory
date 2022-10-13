package operations

import (
	"openapi/pkg/models/shared"
)

type RefreshTrustedAdvisorCheckXAmzTargetEnum string

const (
	RefreshTrustedAdvisorCheckXAmzTargetEnumAwsSupport20130415RefreshTrustedAdvisorCheck RefreshTrustedAdvisorCheckXAmzTargetEnum = "AWSSupport_20130415.RefreshTrustedAdvisorCheck"
)

type RefreshTrustedAdvisorCheckHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RefreshTrustedAdvisorCheckXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RefreshTrustedAdvisorCheckRequest struct {
	Headers RefreshTrustedAdvisorCheckHeaders
	Request shared.RefreshTrustedAdvisorCheckRequest `request:"mediaType=application/json"`
}

type RefreshTrustedAdvisorCheckResponse struct {
	ContentType                        string
	InternalServerError                *interface{}
	RefreshTrustedAdvisorCheckResponse *shared.RefreshTrustedAdvisorCheckResponse
	StatusCode                         int64
}
