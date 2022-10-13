package operations

import (
	"openapi/pkg/models/shared"
)

type ListReceivedLicensesXAmzTargetEnum string

const (
	ListReceivedLicensesXAmzTargetEnumAwsLicenseManagerListReceivedLicenses ListReceivedLicensesXAmzTargetEnum = "AWSLicenseManager.ListReceivedLicenses"
)

type ListReceivedLicensesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListReceivedLicensesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListReceivedLicensesRequest struct {
	Headers ListReceivedLicensesHeaders
	Request shared.ListReceivedLicensesRequest `request:"mediaType=application/json"`
}

type ListReceivedLicensesResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	ListReceivedLicensesResponse   *shared.ListReceivedLicensesResponse
	RateLimitExceededException     *interface{}
	ResourceLimitExceededException *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
