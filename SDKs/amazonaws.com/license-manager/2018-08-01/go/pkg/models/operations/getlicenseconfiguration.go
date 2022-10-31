package operations

import (
	"openapi/pkg/models/shared"
)

type GetLicenseConfigurationXAmzTargetEnum string

const (
	GetLicenseConfigurationXAmzTargetEnumAwsLicenseManagerGetLicenseConfiguration GetLicenseConfigurationXAmzTargetEnum = "AWSLicenseManager.GetLicenseConfiguration"
)

type GetLicenseConfigurationHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLicenseConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetLicenseConfigurationRequest struct {
	Headers GetLicenseConfigurationHeaders
	Request shared.GetLicenseConfigurationRequest `request:"mediaType=application/json"`
}

type GetLicenseConfigurationResponse struct {
	AccessDeniedException           *interface{}
	AuthorizationException          *interface{}
	ContentType                     string
	GetLicenseConfigurationResponse *shared.GetLicenseConfigurationResponse
	InvalidParameterValueException  *interface{}
	RateLimitExceededException      *interface{}
	ServerInternalException         *interface{}
	StatusCode                      int64
}
