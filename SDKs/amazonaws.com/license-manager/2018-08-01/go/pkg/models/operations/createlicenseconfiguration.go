package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLicenseConfigurationXAmzTargetEnum string

const (
	CreateLicenseConfigurationXAmzTargetEnumAwsLicenseManagerCreateLicenseConfiguration CreateLicenseConfigurationXAmzTargetEnum = "AWSLicenseManager.CreateLicenseConfiguration"
)

type CreateLicenseConfigurationHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLicenseConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLicenseConfigurationRequest struct {
	Headers CreateLicenseConfigurationHeaders
	Request shared.CreateLicenseConfigurationRequest `request:"mediaType=application/json"`
}

type CreateLicenseConfigurationResponse struct {
	AccessDeniedException              *interface{}
	AuthorizationException             *interface{}
	ContentType                        string
	CreateLicenseConfigurationResponse *shared.CreateLicenseConfigurationResponse
	InvalidParameterValueException     *interface{}
	RateLimitExceededException         *interface{}
	ResourceLimitExceededException     *interface{}
	ServerInternalException            *interface{}
	StatusCode                         int64
}
