package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLicenseConfigurationXAmzTargetEnum string

const (
	DeleteLicenseConfigurationXAmzTargetEnumAwsLicenseManagerDeleteLicenseConfiguration DeleteLicenseConfigurationXAmzTargetEnum = "AWSLicenseManager.DeleteLicenseConfiguration"
)

type DeleteLicenseConfigurationHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLicenseConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLicenseConfigurationRequest struct {
	Headers DeleteLicenseConfigurationHeaders
	Request shared.DeleteLicenseConfigurationRequest `request:"mediaType=application/json"`
}

type DeleteLicenseConfigurationResponse struct {
	AccessDeniedException              *interface{}
	AuthorizationException             *interface{}
	ContentType                        string
	DeleteLicenseConfigurationResponse map[string]interface{}
	InvalidParameterValueException     *interface{}
	RateLimitExceededException         *interface{}
	ServerInternalException            *interface{}
	StatusCode                         int64
}
