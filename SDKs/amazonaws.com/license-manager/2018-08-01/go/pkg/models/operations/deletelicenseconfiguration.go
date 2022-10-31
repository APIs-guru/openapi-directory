package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLicenseConfigurationXAmzTargetEnum string

const (
	DeleteLicenseConfigurationXAmzTargetEnumAwsLicenseManagerDeleteLicenseConfiguration DeleteLicenseConfigurationXAmzTargetEnum = "AWSLicenseManager.DeleteLicenseConfiguration"
)

type DeleteLicenseConfigurationHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLicenseConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
