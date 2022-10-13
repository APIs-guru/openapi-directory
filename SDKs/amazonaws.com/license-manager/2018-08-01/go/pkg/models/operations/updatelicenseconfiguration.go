package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLicenseConfigurationXAmzTargetEnum string

const (
	UpdateLicenseConfigurationXAmzTargetEnumAwsLicenseManagerUpdateLicenseConfiguration UpdateLicenseConfigurationXAmzTargetEnum = "AWSLicenseManager.UpdateLicenseConfiguration"
)

type UpdateLicenseConfigurationHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLicenseConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateLicenseConfigurationRequest struct {
	Headers UpdateLicenseConfigurationHeaders
	Request shared.UpdateLicenseConfigurationRequest `request:"mediaType=application/json"`
}

type UpdateLicenseConfigurationResponse struct {
	AccessDeniedException              *interface{}
	AuthorizationException             *interface{}
	ContentType                        string
	InvalidParameterValueException     *interface{}
	RateLimitExceededException         *interface{}
	ResourceLimitExceededException     *interface{}
	ServerInternalException            *interface{}
	StatusCode                         int64
	UpdateLicenseConfigurationResponse map[string]interface{}
}
