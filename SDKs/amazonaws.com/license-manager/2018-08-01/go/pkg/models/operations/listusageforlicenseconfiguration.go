package operations

import (
	"openapi/pkg/models/shared"
)

type ListUsageForLicenseConfigurationXAmzTargetEnum string

const (
	ListUsageForLicenseConfigurationXAmzTargetEnumAwsLicenseManagerListUsageForLicenseConfiguration ListUsageForLicenseConfigurationXAmzTargetEnum = "AWSLicenseManager.ListUsageForLicenseConfiguration"
)

type ListUsageForLicenseConfigurationHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListUsageForLicenseConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListUsageForLicenseConfigurationRequest struct {
	Headers ListUsageForLicenseConfigurationHeaders
	Request shared.ListUsageForLicenseConfigurationRequest `request:"mediaType=application/json"`
}

type ListUsageForLicenseConfigurationResponse struct {
	AccessDeniedException                    *interface{}
	AuthorizationException                   *interface{}
	ContentType                              string
	FilterLimitExceededException             *interface{}
	InvalidParameterValueException           *interface{}
	ListUsageForLicenseConfigurationResponse *shared.ListUsageForLicenseConfigurationResponse
	RateLimitExceededException               *interface{}
	ServerInternalException                  *interface{}
	StatusCode                               int64
}
